import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myform: FormGroup;
  constructor( private router: Router,private fb: FormBuilder) {
  let formControls = {

    mail: new FormControl("",[
      Validators.required,
      Validators.minLength(2),
      Validators.email,
    ]),

    password: new FormControl("",[
      Validators.required,
      Validators.minLength(8),
    ])

  }
  this.myform = this.fb.group(formControls);
  }
  get mail() {
    return this.myform.get('mail');
  }
  get password() {
    return this.myform.get('password');
  }
  ngOnInit(): void {

  }
  InUser() {
    console.log(this.myform.value);

  }
  login() {
    this.router.navigateByUrl('');
}
}
