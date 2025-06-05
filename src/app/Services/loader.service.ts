import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderSatus$: Subject<boolean> = new Subject<any>();
  loadeObs$ = this.loaderSatus$.asObservable();
  constructor() {}
  emmitLodaer(flag: boolean) {
    this.loaderSatus$.next(flag);
  }
}
