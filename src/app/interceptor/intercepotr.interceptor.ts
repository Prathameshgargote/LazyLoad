import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '../Services/loader.service';

@Injectable()
export class IntercepotrInterceptor implements HttpInterceptor {
  constructor(private _loaderservie: LoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //loader start
    this._loaderservie.emmitLodaer(true);
    let reqclone = request.clone({
      setHeaders: {
        auth: 'appliction/json',
        token: 'barew from LS',
      },
    });
    return next.handle(reqclone).pipe(
      finalize(() => {
        //loader stop
        this._loaderservie.emmitLodaer(false);
      })
    );
  }
}
