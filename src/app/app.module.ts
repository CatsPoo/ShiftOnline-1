import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { PitBosInOutComponent } from './components/pit-bos-in-out/pit-bos-in-out.component';
import { PitBossBubbleComponent } from './components/pit-bos-in-out/components/pit-boss-bubble/pit-boss-bubble.component';


@NgModule({
  declarations: [
    AppComponent,
    PitBosInOutComponent,
    PitBossBubbleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
