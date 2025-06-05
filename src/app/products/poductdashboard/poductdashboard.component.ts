import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../productsService/products.service';

@Component({
  selector: 'app-poductdashboard',
  templateUrl: './poductdashboard.component.html',
  styleUrls: ['./poductdashboard.component.scss']
})
export class PoductdashboardComponent implements OnInit {
caragaryArr: Array<any> = [
  {
    category: 'Books and Toys',
    subcategories: ['Books', 'Toys'],
  },
  {
    category: 'Electronics',
    subcategories: ['Printer', 'Tablets', 'Headphones'],
  },
  {
    category: 'Fashion',
    subcategories: ['Sunglasses', 'Perfume'],
  },
  {
    category: 'Gaming',
    subcategories: [],
  },
  {
    category: 'Laptops',
    subcategories: ['MacBook', 'Windows', 'Chromebook'],
  },
  {
    category: 'Mobiles',
    subcategories: ['Android', 'iPhones'],
  },
  
];
  constructor(
    private _procuservice:ProductsService
  ) { }

  ngOnInit(): void {
// this._procuservice.getproductbycat('Mobiles').subscribe(res=>{
//   console.log(res);
  
// })
    

  }

}
