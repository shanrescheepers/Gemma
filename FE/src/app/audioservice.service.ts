import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AudioserviceService {

  constructor(private http: HttpClient) { }

  getMP3List(): Observable<string[]> {
    // To fetch the list of MP3 files from an assets folder, use HttpClient
    return this.http.get<string[]>('assets/mp3-list.json');
  }

  setSelectedMP3(mp3FileName: string) {
    localStorage.setItem('selectedMP3', mp3FileName);
  }

  getSelectedMP3() {
    return localStorage.getItem('selectedMP3');
  }
}
