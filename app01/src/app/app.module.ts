import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FriendsComponent } from './friends/friends.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { ArthComponent } from './arth/arth.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FriendsComponent,
    PipesDemoComponent,
    ArthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
