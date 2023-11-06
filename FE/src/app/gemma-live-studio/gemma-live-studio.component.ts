import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {
  HandLandmarker,
  FilesetResolver,
  DrawingUtils,
  GestureRecognizer,
} from '@mediapipe/tasks-vision';
import { promises } from 'dns';
import * as Tone from 'tone';

@Component({
  selector: 'app-gemma-live-studio',
  templateUrl: './gemma-live-studio.component.html',
  styleUrls: ['./gemma-live-studio.component.scss']
})
export class GemmaLiveStudioComponent implements AfterViewInit {
  @ViewChild('webcam') video!: ElementRef;
  @ViewChild('output_canvas') canvasElement!: ElementRef;
  @ViewChild('webcamButton') enableWebcamButton!: ElementRef;
  @ViewChild('gestureOutput') gestureOutput!: ElementRef;

  canvasCtx;
  lastVideoTime = -1;
  detectionResults = undefined;
  gestureResults = undefined;

  handLandmarker: any;
  runningMode: any = 'VIDEO';
  webcamRunning: Boolean = false;

  drawingUtils;

  gestureRecognizer: GestureRecognizer;

  videoHeight = '300px';
  videoWidth = '400px';


  synth;
  bufferLoaded = false;

  currentGestures;

  //<> type def. to return type/ value later after async loaded, promising to fill with value/type
  //js promises
  async ngAfterViewInit(): Promise<void> {
    // show webcam canvas after succ load
    this.canvasCtx = this.canvasElement.nativeElement.getContext('2d');
    this.drawingUtils = new DrawingUtils(this.canvasCtx);

    this.synth = new Tone.Sampler({
      urls: {
        B2: 'B2.mp3',
        A2: 'A2.mp3',
        A3: 'A3.mp3',
        A4: 'A4.mp3',
        D5: 'D5.mp3',
      },
      release: 1,
      baseUrl: './assets/guitar-acoustic/',
    }).toDestination();

    Tone.Buffer.loaded().then(() => {
      this.bufferLoaded = true;
      console.info('Buffer Loaded');
    });


    // Iff webcam supported, add event listener to button for when user wants to activate it/Clicks accept preference.
    if (!this.hasGetUserMedia()) {
      console.warn('getUserMedia() is not supported by your cuurent browser');
    }
    await this.createHandLandmarker();
    await this.createGestureRecognizer();
  }
  // my favorite : ?
  hasGetUserMedia = () => !!navigator.mediaDevices?.getUserMedia;

  // TODo: Skeleton Color Change
  createHandLandmarker = async () => {

    const vision = await FilesetResolver.forVisionTasks(

      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm'
    );

    this.handLandmarker = await HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: `./assets/hand_landmarker.task`,
        delegate: 'GPU',
      },
      runningMode: this.runningMode,
      numHands: 2,

    }).then(x => { console.log(x); return x });
    ;
  };


  createGestureRecognizer = async () => {

    const vision = await FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm'
    );
    this.gestureRecognizer = await GestureRecognizer.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: `./assets/gestures_model.task`,
        delegate: 'GPU',
      },
      runningMode: this.runningMode,
    }).then(x => { console.log(x); return x });
  };

  // Enable the live webcam view and start detection.
  enableCam(event) {
    if (!this.handLandmarker) {
      alert('Wait! objectDetector not loaded yet. wait');
      return;
    }

    if (!this.gestureRecognizer) {
      alert('Please wait for gestureRecognizer to load');
      return;
    }

    if (this.webcamRunning === true) {
      this.webcamRunning = false;
      this.enableWebcamButton.nativeElement.innerText = 'ENABLE PREDICTIONS';
    } else {
      this.webcamRunning = true;
      this.enableWebcamButton.nativeElement.innerText = 'Camera Running';
    }
    // getUsermedia parameters.
    const constraints = {
      video: true,
      // facingMode: 'user',

    };

    // Activate the webcam stream.
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      this.video.nativeElement.srcObject = stream;
    });
  }


  async predictWebcam() {
    this.canvasElement.nativeElement.style.width =
      this.video.nativeElement.videoWidth.toString();
    this.canvasElement.nativeElement.style.height =
      this.video.nativeElement.videoHeight.toString();
    this.canvasElement.nativeElement.width =
      this.video.nativeElement.videoWidth;
    this.canvasElement.nativeElement.height =
      this.video.nativeElement.videoHeight;
    this.canvasElement.nativeElement.scaleX =
      this.canvasElement.nativeElement.videoScale;

    // Now let's start detecting the stream.
    if (this.runningMode === 'IMAGE') {
      this.runningMode = 'VIDEO';
      await this.handLandmarker.setOptions({ runningMode: 'VIDEO' });

    }

    let startTimeMs = performance.now();

    if (this.lastVideoTime !== this.video.nativeElement.currentTime) {
      this.lastVideoTime = this.video.nativeElement.currentTime;
      this.detectionResults = this.handLandmarker.detectForVideo(
        this.video.nativeElement,
        startTimeMs
      );
      this.gestureResults = this.gestureRecognizer.recognizeForVideo(
        this.video.nativeElement,
        startTimeMs
      );
    }

    this.canvasCtx.save();
    this.canvasCtx.clearRect(
      0,
      0,
      this.canvasElement.nativeElement.width,
      this.canvasElement.nativeElement.height,
      // this.canvasElement.nativeElement.videoHeight(-1, 1)
    );

    // Landmarks and keyoints
    if (this.detectionResults.landmarks) {
      for (const landmarks of this.detectionResults.landmarks) {
        this.drawingUtils.drawConnectors(
          landmarks,

          GestureRecognizer.HAND_CONNECTIONS,
          {
            color: '#7627EC',
            lineWidth: 2,
          }
        );
        this.drawingUtils.drawLandmarks(landmarks, {
          color: '#F06096',
          lineWidth: 1,
        });
      }
    }
    this.canvasCtx.restore();

    if (this.gestureResults.gestures.length > 0) {
      const categoryName = this.gestureResults.gestures[0][0].categoryName;
      const categoryScore = parseFloat(
        (this.gestureResults.gestures[0][0].score * 100).toString()
      ).toFixed(2);
      const handedness = this.gestureResults.handednesses[0][0].displayName;

      this.gestureOutput.nativeElement.style.display = 'inline-block';
      this.gestureOutput.nativeElement.style.width = this.videoWidth;

      this.gestureOutput.nativeElement.style.color = '#000';
      // Category names are the different gestures. Have list of gestures. Have floor & switchcase included acc to chat
      this.gestureOutput.nativeElement.innerText = `GestureRecognizer: ${categoryName}\n Confidence: ${categoryScore} %\n Handedness: ${handedness}`;

      if (Tone.context.state !== 'running') Tone.context.resume();
      const now = Tone.now();

      if (this.bufferLoaded) {
        if (
          this.gestureResults.gestures[0][0].categoryName !== '' &&
          this.gestureResults.gestures[0][0].categoryName !== 'none' &&
          this.currentGestures !==
          this.gestureResults.gestures[0][0].categoryName
        ) {
          console.log(this.gestureResults.gestures[0][0].categoryName + "identified");

          this.currentGestures =
            this.gestureResults.gestures[0][0].categoryName;

          // The abiloty to release the gesture, and have the sound fade out slowly done through the triggerRelease
          this.synth.triggerRelease(now);

          // all my fingys - 5 minimum, can add more later
          switch (this.gestureResults.gestures[0][0].categoryName) {
            case 'fingy':
              this.synth.triggerAttack('B2', now);
              break;
            case 'double_fingy':
              this.synth.triggerAttack('A2', now);
              break;
            case 'trip_fingy':
              this.synth.triggerAttack('A3', now);
              break;
            case 'quad_fingy':
              this.synth.triggerAttack('A4', now);
              break;
            case 'heptagonal_fingy':
              this.synth.triggerAttack('D5', now);
              break;
            default:
              this.synth.triggerRelease(now);
              break;
          }
        }
      } else {
        this.gestureOutput.nativeElement.style.display = 'none';
      }
    }

    // Call this function again to keep predicting when the browser is ready.
    if (this.webcamRunning === true) {
      window.requestAnimationFrame(this.predictWebcam.bind(this));
    }
  }
}
