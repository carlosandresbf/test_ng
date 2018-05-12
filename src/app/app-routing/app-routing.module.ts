
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './../auth/login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, //admin
      { path: 'auth/login', component: LoginComponent },
      { path: 'auth', component: LoginComponent },
      { path: 'auth/login/', component: LoginComponent }
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
