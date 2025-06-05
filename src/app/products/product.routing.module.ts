import { RouterModule, Routes } from '@angular/router';
import { PoductdashboardComponent } from './poductdashboard/poductdashboard.component';
import { NgModule } from '@angular/core';
import { ProductsResolver } from './resolver/products.resolver';
import { CategoryCardComponent } from './category-card/category-card.component';

const route: Routes = [
  {
    path: '',
    component: PoductdashboardComponent,
    children: [
      {
        path: 'Mobiles',
        component: CategoryCardComponent,
        resolve: {
          productdata: ProductsResolver,
        },
      },
      {
        path: 'Laptops',
        component: CategoryCardComponent,
        resolve: {
          productdata: ProductsResolver,
        },
      },
      {
        path: 'Electronics',
        component: CategoryCardComponent,
        resolve: {
          productdata: ProductsResolver,
        },
      },
      {
        path: 'Books and Toys',
        component: CategoryCardComponent,
        resolve: {
          productdata: ProductsResolver,
        },
      },
      {
        path: 'Gaming',
        component: CategoryCardComponent,
        resolve: {
          productdata: ProductsResolver,
        },
      },
      {
        path: 'Fashion',
        component: CategoryCardComponent,
        resolve: {
          productdata: ProductsResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class productRoutingModule {}
