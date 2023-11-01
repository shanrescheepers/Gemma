import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
<div>
    <nav [class.hide-nav]="isHiddenRoute()" class="nav">
        <div class="nav-item-logo-div">
            <img src="../assets/images/gemma-logo-icon.png" alt="Logo" class="nav-item-logo">
        </div>
        <div class="nav-grid">
            
          
            <button class="nav-item"><a routerLink="/mappinglibrary" class="nav-link">Gesture Library</a></button>
            <button class="nav-item"><a routerLink="/gemmastudio" class="nav-link">Gemma Studio</a></button>
            <button class="nav-item"><a routerLink="/helphub" class="nav-link">Help Hub</a></button>
        </div>
    </nav>
</div>
  <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) { }

  isHiddenRoute(): boolean {
    const hiddenRoutes = ['/', '/onboarding1', '/onboarding2'];
    return hiddenRoutes.includes(this.router.url);
  }
}