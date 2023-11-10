import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splashscreen/splashscreen.component';
import { Onboarding1Component } from './onboarding1/onboarding1.component';
import { Onboarding2Component } from './onboarding2/onboarding2.component';
import { HelpHubComponent } from './help-hub/help-hub.component';
import { GestureSoundLibraryComponent } from './gesture-sound-library/gesture-sound-library.component';
import { GemmaLiveStudioComponent } from './gemma-live-studio/gemma-live-studio.component';
import { GestureControlComponent } from './gesture-control/gesture-control.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'splash', component: SplashComponent },
  { path: 'ob1', component: Onboarding1Component },
  { path: 'ob2', component: Onboarding2Component },
  // { path: 'sound-gesture', component: GestureSoundLibraryComponent },
  { path: 'liveplay', component: GemmaLiveStudioComponent },
  { path: 'info', component: HelpHubComponent },
  { path: 'gesture-controls', component: GestureControlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
