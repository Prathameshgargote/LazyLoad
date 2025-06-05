import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
  {
    category: 'Mobile Accessories',
    subcategories: ['Phone Cases', 'Earphones', 'SmartWatch'],
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
