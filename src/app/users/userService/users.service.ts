import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  BASE_URL: string = environment.userurl;
  USER_URL: string = `${this.BASE_URL}/users`;
 private UserSub$=new BehaviorSubject<any[]>([])
 UsersObs$=this.UserSub$.asObservable()
  constructor(private _http: HttpClient) {}
  fetchAllusers(): Observable<any> {
    return this._http.get<any>(this.USER_URL)

  }
}
