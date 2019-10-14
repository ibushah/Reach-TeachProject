import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'



import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component'
import { ChangpasswordComponent } from './changpassword/changpassword.component';
import { FrontComponent } from './front/front.component'
import { RegisterOnboardingComponent } from './register-onboarding/register-onboarding.component'
import { PlanComponent } from './onboarding/plan/plan.component'
import { ResetPasswordComponent } from './reset-password/reset-password.component'


const routes: Routes = [
  { path: '', component: FrontComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterOnboardingComponent },
  { path: 'forgot-password', component: ForgotpasswordComponent },
  { path: 'change-password', component: ChangpasswordComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
