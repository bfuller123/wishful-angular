import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistTableComponent } from './wishlist-table/wishlist-table.component';
import { WishlistAddComponent } from './wishlist-add/wishlist-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WishlistTableComponent, WishlistAddComponent]
})
export class UserDashboardModule { }
