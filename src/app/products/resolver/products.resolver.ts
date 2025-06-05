import { inject, Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductsService } from '../productsService/products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolver
  implements Resolve<Observable<any> | any[] | null>
{
  private _productservice = inject(ProductsService);
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | any[] | null {
    // return of(true);
    let category = route.queryParamMap.get('category');
    console.log(category);
    if (category) {
      return this._productservice.getproductbycat(category);
    }
    return null;
  }
}
