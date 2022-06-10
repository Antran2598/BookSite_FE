import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItemsRoutingModule } from './cart-items-routing.module';
import { CartItemsComponent } from './cart-items.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartItemsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CartItemsRoutingModule
  ]
})
export class CartItemsModule { }
