import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../model/product';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  prodArr:Iproduct[]=[]
  constructor(private _ActivaRouter: ActivatedRoute) {
    this._ActivaRouter.data.subscribe((res) => {
      console.log(res);
      this.prodArr=res['productdata']
    });
  }

  ngOnInit(): void {}
}
