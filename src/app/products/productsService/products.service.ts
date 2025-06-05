import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  PRODUCT_URL: string = environment.baseurl;
  constructor(private _http: HttpClient) {}

  getproductbycat(cat: string) {
    let param = new HttpParams().set('category', cat);
    return this._http.get(`${this.PRODUCT_URL}/filter`, { params: param });
  }
}
