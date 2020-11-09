import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeePersonal } from '../Model/EmployeePersonal';
import { map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpCallsService } from '../Service/http-calls.service';
import { NavigationService } from '../Service/navigation.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  loginForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpCallsService, private navigate: NavigationService) {
   }
  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
    emailId: 'nitesh.17021997@outlook.com',
    pass: 'Nitesh@1'
    });

  }

  SignIn()
  {
    var email = this.loginForm.controls['emailId'].value.toString();
    var pass = this.loginForm.controls['pass'].value.toString();
    this.http.ValidateLoginCredentials(email, pass).subscribe(data => this.RedirectOnDesignation(data));
  }

  RedirectOnDesignation(data: any)
  {
    var designation = data.designation.toString();
    this.navigate.LoginNavigation(designation);
  }

}
