import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParallaxDirective } from './parallax.directive';
import { FollowTheMouseDirective } from './follow-the-mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxDirective,
    FollowTheMouseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
