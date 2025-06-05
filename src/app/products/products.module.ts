import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoductdashboardComponent } from './poductdashboard/poductdashboard.component';
import { productRoutingModule } from './product.routing.module';

import { HttpClientModule } from '@angular/common/http';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [
    PoductdashboardComponent,
    CategoryCardComponent,
    CardComponent,
  ],
  imports: [CommonModule, productRoutingModule, HttpClientModule,MaterialModule],
})
export class ProductsModule {
  constructor() {
    console.log('Products module ');
  }
}
