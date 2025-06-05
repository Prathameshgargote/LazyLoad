import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../model/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() prodobj!: Iproduct;
  constructor() {}

  ngOnInit(): void {}
}
