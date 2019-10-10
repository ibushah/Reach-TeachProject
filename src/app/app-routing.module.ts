import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'

import { AuthGuard } from "./auth.guard";

import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component'
import {ChangpasswordComponent} from './changpassword/changpassword.component';
import {FrontComponent} from './front/front.component'
import {SignupComponent} from './signup/signup.component'



const routes: Routes = [
  {path:'login',  component:LoginComponent},
  {path:'signup',component:SignupComponent},

  {path:'forgotpassword', component:ForgotpasswordComponent},

  {path:'changepassword/:token',component:ChangpasswordComponent},
  {path:'',component:FrontComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
