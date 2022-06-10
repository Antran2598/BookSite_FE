import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgxPaginationModule} from 'ngx-pagination';
import { PublisherRoutingModule } from './publisher-routing.module';
import { PublisherComponent } from './publisher.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PublisherComponent
  ],
  imports: [
    CommonModule,
    PublisherRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class PublisherModule { }
