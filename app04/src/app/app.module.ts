import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccountHoldersComponent } from './account-holders/account-holders.component';
import { AccountHolderFormComponent } from './account-holder-form/account-holder-form.component';
import { NumberSeriesComponent } from './number-series/number-series.component';
import { NumberSeriesGroupComponent } from './number-series-group/number-series-group.component';
import { TxnsComponent } from './txns/txns.component';
import { TxnRowComponent } from './txn-row/txn-row.component';
import { TxnFormRowComponent } from './txn-form-row/txn-form-row.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountHoldersComponent,
    AccountHolderFormComponent,
    NumberSeriesComponent,
    NumberSeriesGroupComponent,
    TxnsComponent,
    TxnRowComponent,
    TxnFormRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
