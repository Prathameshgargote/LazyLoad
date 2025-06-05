import { inject, Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsersService } from '../userService/users.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<boolean> {
  private _userservice = inject(UsersService);
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._userservice.fetchAllusers();
  }
}
