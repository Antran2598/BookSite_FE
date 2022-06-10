import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Author } from 'src/app/model/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  public authors: Author[] | any;
  p: number = 1;
  public editAuthor: Author = {};
  public deleteAuthor: Author | any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  public getAuthors(): void {
    this.bookService.getAuthors().subscribe(
      (response: any) => {
        this.authors = response.data;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchAuthors(key: string): void {
    console.log(key);
    const results: Author[] = [];
    for (const author of this.authors) {
      if (author.authorName.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(author);
      }
    }
    this.authors = results;
    if (results.length === 0 || !key) {
      this.getAuthors();
    }
  }

  public onAddAuthor(addForm: NgForm) {
    document.getElementById('add-user-form')?.click();
    this.bookService.addAuthors(addForm.value).subscribe(
      (response: Author) => {
        console.log(addForm);
        console.log(response);
        this.getAuthors();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    )
  }

  public onUpdateAuthor() {
    console.log(this.editAuthor);
    this.bookService.updateAuthor(this.editAuthor).subscribe(
      (response: Author) => {
        console.log(response);
        console.log(this.editAuthor);
        alert("Update Success")
        this.getAuthors();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    )
  }


  public onDeleteAuthor(authorId: number) {
    this.bookService.deleteAuthors(authorId).subscribe(
      (response: void) => {
        console.log(response);
        this.getAuthors();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    )
  }

  public onOpenModal(author: Author | any, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addAuthorModal');
    }
    if (mode === 'edit') {
      this.editAuthor = author;
      button.setAttribute('data-target', '#editAuthorModal');
    }
    if (mode === 'delete') {
      this.deleteAuthor = author;
      button.setAttribute('data-target', '#deleteAuthorModal');
    }
    container?.appendChild(button);
    button.click();
  }

}
