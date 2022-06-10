import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthorComponent
  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class AuthorModule { }
