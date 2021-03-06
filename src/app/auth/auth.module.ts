import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './../services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  declarations: [LoginComponent],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
