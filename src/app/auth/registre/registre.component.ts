import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { User } from '../User';
import { UserregistrationService } from '../userregistration.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss']
})


export class RegistreComponent implements OnInit {

  user: User = new User("","","","");
  message:any;

  selected = 'option2';
myform: FormGroup;
constructor( private fb: FormBuilder, private service:UserregistrationService) {
  let formControls = {
    nom: new FormControl("",[
      Validators.required,
      Validators.pattern("[a-z.'-]+"),
      Validators.minLength(2)
    ]),
    prenom: new FormControl( "",[
      Validators.required,
      Validators.pattern("[a-z.'-]+"),
      Validators.minLength(2)]),

    email: new FormControl("",[
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


get nom() {
  return this.myform.get('nom');
}
get prenom() {
  return this.myform.get('prenom');
}
get email() {
  return this.myform.get('email');
}
get password() {
  return this.myform.get('password');
}

  ngOnInit(): void {
  }

  public registerNow(){
    let resp =this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
      }

  saveUser() {
    console.log(this.myform.value);

  }

}
