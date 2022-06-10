import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class CategoryModule { }
