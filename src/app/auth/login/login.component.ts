import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  f: FormGroup;
  loginFail: boolean;
  
  constructor(private formBuilder: FormBuilder, private _authService:AuthService, private router: Router) { }

  ngOnInit() {
    sessionStorage.clear();
    this.f = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
    this.loginFail = false;

  }

  onSubmit(){
    this._authService.Login(this.f.value).subscribe(
      (resp)=> {
        this.router.navigate(['admin']);
      //  console.log(resp)
      },
      (errorResponse: HttpErrorResponse) => { console.log(errorResponse); this.loginFail = true; this.f.reset(); }
    );
  }

}
