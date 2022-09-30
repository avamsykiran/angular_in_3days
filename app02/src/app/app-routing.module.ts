import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHolderFormComponent } from './account-holder-form/account-holder-form.component';
import { AccountHoldersComponent } from './account-holders/account-holders.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/accounts'},
  {path:'accounts',component:AccountHoldersComponent},
  {path:'addAccount',component:AccountHolderFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
