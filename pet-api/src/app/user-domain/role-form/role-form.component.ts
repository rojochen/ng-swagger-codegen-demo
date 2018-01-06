import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {
  roleOptions: { name: string, value: string, index: number}[] ;
  constructor() {
     this.roleOptions = [
       {name: 'admin', value: 'admin', index: 1},
       {name: 'user', value: 'user', index: 2},
       {name: 'guest', value: 'guest', index: 3},
      ];

  }
  ngOnInit() {
  }

}
