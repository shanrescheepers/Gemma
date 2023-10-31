import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splashscreen/splashscreen.component';
import { Onboarding1Component } from './onboarding1/onboarding1.component';
import { Onboarding2Component } from './onboarding2/onboarding2.component';
import { HelpHubComponent } from './help-hub/help-hub.component';
import { GestureSoundLibraryComponent } from './gesture-sound-library/gesture-sound-library.component';
import { GemmaLiveStudioComponent } from './gemma-live-studio/gemma-live-studio.component';

// const routes: Routes = [];
const routes: Routes = [
  // Setting 'splash/splaschreen' as the initial route.
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: '', component: SplashComponent },
  { path: 'ob1', component: Onboarding1Component },
  { path: 'ob2', component: Onboarding2Component },
  { path: 'mappinglibrary', component: GestureSoundLibraryComponent },
  { path: 'gemmastudio', component: GemmaLiveStudioComponent },
  { path: 'helphub', component: HelpHubComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
