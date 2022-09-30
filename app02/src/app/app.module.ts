import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccountHoldersComponent } from './account-holders/account-holders.component';
import { AccountHolderFormComponent } from './account-holder-form/account-holder-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountHoldersComponent,
    AccountHolderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
