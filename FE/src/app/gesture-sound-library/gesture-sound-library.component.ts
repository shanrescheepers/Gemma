import { Component, OnInit } from '@angular/core';
import { DropdownComponent } from '../components/dropdown/dropdown.component';
import { MaterialModule } from '../material/material/material.module';
import { AudioserviceService } from '../audioservice.service';
import * as Tone from 'tone';

@Component({
  selector: 'app-gesture-sound-library',
  templateUrl: './gesture-sound-library.component.html',
  styleUrls: ['./gesture-sound-library.component.scss']
})
export class GestureSoundLibraryComponent implements OnInit {
  selectedMP3: string[] = ['None', 'None', 'None', 'None', 'None'];
  player: Tone.Player;
  isPlaying: boolean = false; // Variable to track the play state
  playButtonText: string = 'Play'; // Text on the play button

  constructor(private audioService: AudioserviceService) {
    this.player = new Tone.Player().toDestination();
  }
  log(mp3SelectdName: string, index: number) {
    console.log(mp3SelectdName)
    this.selectedMP3[index] = mp3SelectdName;
  }
  ngOnInit(): void {
    // Fetch the selected MP3 from local storage

  }

  playSelectedMP3(index: number) {
    if (this.selectedMP3[index] !== 'None') {
      // Construct the correct path to the MP3 file in the assets folder
      const mp3FilePath = `assets/custom/${this.selectedMP3[index]}`;

      // Load and play the selected MP3 using Tone.js
      this.player.load(mp3FilePath).then(() => {
        this.player.start();
      });
    } else {
      this.togglePlayState(index)
      this.player.stop();
    }
  }
  // Toggle the play state and update the button text
  togglePlayState(index: number) {
    if (this.isPlaying) {
      this.player.stop();
      this.playButtonText = 'Play';
      console.log(this.isPlaying + this.playButtonText)

    } else {
      this.playSelectedMP3(index);
      this.playButtonText = 'Stop';
      console.log(this.playSelectedMP3 + this.playButtonText)
    }
    this.isPlaying = !this.isPlaying;
  }








}
