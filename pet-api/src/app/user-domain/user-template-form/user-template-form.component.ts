import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-user-template-form',
  templateUrl: './user-template-form.component.html',
  styleUrls: ['./user-template-form.component.css']
})
export class UserTemplateFormComponent implements OnInit {
  user;
  constructor() {
    this.user = {
      name: 'roger',
      gender: 'female'
    };
  }
  submit(form: NgForm) {
    console.log(form.value);
    console.log(this.user);
    if (form.valid===false) {
      alert('表單檢核失敗');
    }
  }
  ngOnInit() {
  }

}
