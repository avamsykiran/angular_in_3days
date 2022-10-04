import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHolderFormComponent } from './account-holder-form/account-holder-form.component';
import { AccountHoldersComponent } from './account-holders/account-holders.component';
import { NumberSeriesGroupComponent } from './number-series-group/number-series-group.component';
import { TxnsComponent } from './txns/txns.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/accounts'},
  {path:'accounts',component:AccountHoldersComponent},
  {path:'addAccount',component:AccountHolderFormComponent},
  {path:'editAccount/:id',component:AccountHolderFormComponent},
  {path:'statement/:ahId',component:TxnsComponent},
  {path:'nss',component:NumberSeriesGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
