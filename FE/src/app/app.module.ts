import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashComponent } from './splashscreen/splashscreen.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Onboarding1Component } from './onboarding1/onboarding1.component';
import { Onboarding2Component } from './onboarding2/onboarding2.component';
import { GestureSoundLibraryComponent } from './gesture-sound-library/gesture-sound-library.component';
import { GemmaLiveStudioComponent } from './gemma-live-studio/gemma-live-studio.component';
import { HelpHubComponent } from './help-hub/help-hub.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    Onboarding1Component,
    Onboarding2Component,
    GestureSoundLibraryComponent,
    GemmaLiveStudioComponent,
    HelpHubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
