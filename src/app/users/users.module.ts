import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { userRoutingModule } from './user.routing.module';
import { UserInactiveComponent } from './user-inactive/user-inactive.component';
import { UserActiveComponent } from './user-active/user-active.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    UserdashboardComponent,
    UserInactiveComponent,
    UserActiveComponent,
  ],
  imports: [CommonModule, userRoutingModule,MaterialModule],
})
export class UsersModule {
  constructor() {
    console.log('user model call');
  }
}
