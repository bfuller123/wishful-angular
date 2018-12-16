import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { LoginComponent } from './login/login.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { WishlistTableComponent } from './user-dashboard/wishlist-table/wishlist-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    LoginComponent,
    MenuBarComponent,
    WishlistTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
