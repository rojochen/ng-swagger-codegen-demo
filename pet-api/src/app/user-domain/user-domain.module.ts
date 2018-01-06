import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoleFormComponent } from './role-form/role-form.component';
import { UserTemplateFormComponent } from './user-template-form/user-template-form.component';
import { UserReactiveFormComponent } from './user-reactive-form/user-reactive-form.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  exports: [
    UserFormComponent,
    UserListComponent,
    UserPageComponent,
    RoleFormComponent,
    UserTemplateFormComponent,
    UserReactiveFormComponent
  ],
  declarations: [
    UserFormComponent,
    UserListComponent,
    UserPageComponent,
    RoleFormComponent,
    UserTemplateFormComponent,
    UserReactiveFormComponent
  ]
})
export class UserDomainModule { }
