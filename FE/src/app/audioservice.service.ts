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
  // specify index, waar verander
  setSelectedMP3(mp3FileName: string, index: number) {
    let x: any = JSON.parse(localStorage.getItem('selectedMP3'));
    if (!x) {
      x = ['None', 'None', 'None', 'None', 'None'];
    }
    x[index] = mp3FileName;
    localStorage.setItem('selectedMP3', JSON.stringify(x));
  }

  getSelectedMP3(index: number) {
    let x: any = JSON.parse(localStorage.getItem('selectedMP3'));
    if (!x) {
      x = ['None', 'None', 'None', 'None', 'None'];
    }
    return x[index];
  }
}
