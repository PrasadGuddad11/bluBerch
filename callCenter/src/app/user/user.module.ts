import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash/splash.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    SplashComponent,
    SigninComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
