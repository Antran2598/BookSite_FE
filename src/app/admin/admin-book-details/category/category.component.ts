import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { BookService } from 'src/app/service/book.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public cates: Category[] | any;
  public editCate: Category = {};
  public deleteCate: Category | any;
  p: number = 1;


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getCates();
  }

  public getCates(): void {
    this.bookService.getCates().subscribe(
      (response: any) => {
        this.cates = response.data;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchCates(key: string): void {
    console.log(key);
    const results: Category[] = [];
    for (const cate of this.cates) {
      if (cate.cateName.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(cate);
      }
    }
    this.cates = results;
    if (results.length === 0 || !key) {
      this.getCates();
    }
  }

  public onAddCate(addForm: NgForm) {
    document.getElementById('add-user-form')?.click();
    this.bookService.addCates(addForm.value).subscribe(
      (response: Category) => {
        console.log(addForm);
        console.log(response);
        this.getCates();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    )
  }

  public onUpdateCategory() {
    console.log(this.editCate);
    this.bookService.updateCates(this.editCate).subscribe(
      (response: Category) => {
        console.log(response);
        console.log(this.editCate);
        alert("Update Success")
        this.getCates();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    )
  }


  public onDeleteCate(cateId: number) {
    this.bookService.deleteCates(cateId).subscribe(
      (response: void) => {
        console.log(response);
        this.getCates();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    )
  }

  public onOpenModal(category: Category | any, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCateModal');
    }
    if (mode === 'edit') {
      this.editCate = category;
      button.setAttribute('data-target', '#editCateModal');
    }
    if (mode === 'delete') {
      this.deleteCate = category;
      button.setAttribute('data-target', '#deleteCateModal');
    }
    container?.appendChild(button);
    button.click();
  }

}
