import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css']
})
export class UserReactiveFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
   this.userForm =  this.fb.group({
      name : ['', Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
      gender: ['female' , [Validators.required]]
    });
  }
  submit(userForm: FormGroup) {
    console.log(userForm.value);
    if (userForm.valid) {
       console.log(userForm.value);
    }else{

      alert("驗証失敗");
    }
  }
  ngOnInit() {
  }

}
