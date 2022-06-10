import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';
@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class BookModule { }
