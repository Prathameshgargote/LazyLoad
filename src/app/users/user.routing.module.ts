import { Router, RouterModule, Routes } from '@angular/router';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { NgModule } from '@angular/core';
import { UserActiveComponent } from './user-active/user-active.component';
import { UserInactiveComponent } from './user-inactive/user-inactive.component';
import { UserResolver } from './resolver/user.resolver';

const route: Routes = [
  {
    path: '',
    component: UserdashboardComponent,
    children: [
      {
        path: 'inactive',
        component: UserInactiveComponent,
        resolve: {
          userdata: UserResolver,
        },
      },
      {
        path: 'active',
        component: UserActiveComponent,
        resolve: {
          userdata: UserResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class userRoutingModule {}
