import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('hidden => visible', animate('500ms ease-in')),
    ]),
  ],
})
export class SplashComponent implements OnInit {
  // Define variables to control the visibility of elements.
  public element1State = 'hidden';
  public element2State = 'hidden';
  public element3State = 'hidden';
  // Add more elements as needed for animatio display on splash paage.

  constructor(private router: Router) { } // Inject the Router service

  ngOnInit() {
    // Trigger animations after a delay.
    setTimeout(() => {
      this.element1State = 'visible';
    }, 1000);
    setTimeout(() => {
      this.element2State = 'visible';
    }, 2000);
    setTimeout(() => {
      this.element3State = 'visible';
    }, 3000);
    // Add more timeouts and elements as needed.
    // After all animations are complete, navigate to the main application page.
    setTimeout(() => {
      this.router.navigate(['/gemmastudio']);
    }, 8000);
  }
}





