import { Component, OnInit, Input } from '@angular/core';
import { ITEMS } from 'src/app/testData/items';

@Component({
  selector: 'app-wishlist-table',
  templateUrl: './wishlist-table.component.html',
  styleUrls: ['./wishlist-table.component.css']
})
export class WishlistTableComponent implements OnInit {

  items = ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
