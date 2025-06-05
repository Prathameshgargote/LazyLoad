import { Component, inject, OnInit } from '@angular/core';
import { LoaderService } from './Services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'LazyLoading';
  IsloaderOn!: boolean;
  private _loaderservice = inject(LoaderService);
  ngOnInit(): void {
    this._loaderservice.loadeObs$.subscribe((res) => {
      this.IsloaderOn = res;
    });
  }
}
