import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material/material/material.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AudioserviceService } from 'src/app/audioservice.service';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule],
})
export class DropdownComponent {
  mp3List: string[] = [];
  selectedMP3: string = 'none'; // Initialize the selected MP3 to 'none' or an appropriate default value

  constructor(private audioService: AudioserviceService) { }

  ngOnInit(): void {
    this.audioService.getMP3List().subscribe(data => {
      this.mp3List = data;
      this.selectedMP3 = this.audioService.getSelectedMP3() || 'none';
    });
  }

  onSelectionChange() {
    // Save the selected MP3 to local storage
    this.audioService.setSelectedMP3(this.selectedMP3);
  }
}
