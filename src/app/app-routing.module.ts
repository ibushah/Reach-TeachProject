import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'

import { AuthGuard } from "./auth.guard";

import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component'
import {ChangpasswordComponent} from './changpassword/changpassword.component'

const routes: Routes = [
  {path:'login',  component:LoginComponent},

  {path:'forgotpassword', component:ForgotpasswordComponent},

  {path:'changepassword',  canActivate: [AuthGuard],component:ChangpasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
