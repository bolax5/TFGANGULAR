import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    SignInComponent
  ],
  declarations: [HomeComponent, LoginComponent, SignInComponent],
  providers: [
    CoreModule
  ]
})
export class HomeModule { }
