import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsertBookRoutingModule } from './insert-book-routing.module';
import { InsertBookComponent } from './insert-book.component';
import{ FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    InsertBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InsertBookRoutingModule
  ]
})
export class InsertBookModule { }
