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
  selectedMP3: string = 'none';
  player: Tone.Player;
  isPlaying: boolean = false; // Variable to track the play state
  playButtonText: string = 'Play'; // Text on the play button

  constructor(private audioService: AudioserviceService) {
    this.player = new Tone.Player().toDestination();
  }


  ngOnInit(): void {
    // Fetch the selected MP3 from local storage
    this.selectedMP3 = this.audioService.getSelectedMP3();
  }

  // Toggle the play state and update the button text from play to stop
  togglePlayState() {
    if (this.isPlaying) {
      this.player.stop();
      this.playButtonText = 'Play';
    } else {
      this.playSelectedMP3();
      this.playButtonText = 'Stop';
    }
    this.isPlaying = !this.isPlaying;
  }

  playSelectedMP3() {
    if (this.selectedMP3 !== 'none') {
      // Construct the correct path to the MP3 file in the assets folder
      const mp3FilePath = `assets/custom/${this.selectedMP3}`;

      // Load and play the selected MP3 using Tone.js
      this.player.load(mp3FilePath).then(() => {
        this.player.start();
      });
    }
  }







}
