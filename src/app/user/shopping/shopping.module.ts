import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    FormsModule
  ]
})
export class ShoppingModule { }
