import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertBookComponent } from './insert-book.component';

const routes: Routes = [{ path: '', component: InsertBookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsertBookRoutingModule { }
