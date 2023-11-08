import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from 'src/app/material/material/material.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AudioserviceService } from 'src/app/audioservice.service';
import { take } from 'rxjs';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule],
})
export class DropdownComponent {
  mp3List: string[] = [];
  // as ek dit nie define nie, crash d
  @Input() index: number = -1;

  selectedMP3: string = 'None'; // Initialize the selected MP3 to 'none' or an appropriate default value
  @Output() x: EventEmitter<string> = new EventEmitter<string>();

  constructor(private audioService: AudioserviceService) { }

  ngOnInit(): void {
    // pipe,take: pipe operation uit na iets toe, take :vat 1 en unsubscribe
    this.audioService.getMP3List().pipe(take(1)).subscribe(data => {
      this.mp3List = data;
      this.selectedMP3 = this.audioService.getSelectedMP3(this.index) || 'None';
      // automatic unsibscribe aan die einde
    });
  }

  onSelectionChange() {
    // Save the selected MP3 to local storage
    this.audioService.setSelectedMP3(this.selectedMP3, this.index);
    this.x.emit(this.selectedMP3);
  }
}
