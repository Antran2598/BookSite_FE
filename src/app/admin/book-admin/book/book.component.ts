import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public books: Book[] | any;
  p: number = 1;
  public editBook: Book = {};
  public deleteBook: Book | any;
  authorList: any;
  publisherList: any;
  cateList: any;
  book: Book = {

  };
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
    this.getAuthorList();
    this.getPublisherList();
    this.getCateList();
  }
  public getBooks(): void {
    this.bookService.getBooks().subscribe(
      (response: any) => {
        this.books = response.data;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getAuthorList() {
    this.bookService.getAuthors().subscribe((response: any) => {
      this.authorList = response.data;
    });
  }

  getPublisherList() {
    this.bookService.getPublishers().subscribe((response: any) => {
      this.publisherList = response.data;
    });
  }

  getCateList() {
    this.bookService.getCates().subscribe((response: any) => {
      this.cateList = response.data;
    });
  }

  public onUpdateBook() {
    console.log(this.editBook);
    this.bookService.updateBooks(this.editBook).subscribe(
      (response: Book) => {
        console.log(response);
        console.log(this.editBook);
        alert("Update Success")
        this.getBooks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    )

  }


  public onDeleteBook(bookId: number) {
    this.bookService.deleteBooks(bookId).subscribe(
      (response: void) => {
        console.log(response);
        this.getBooks();
        close();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    )
  }

  public searchBooks(key: string): void {
    console.log(key);
    const results: Book[] = [];
    for (const book of this.books) {
      if (book.bookName.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(book);
      }
    }
    this.books = results;
    if (results.length === 0 || !key) {
      alert("No books found")
      this.getBooks();
    }

  }

  public onOpenModal(book: Book | any, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editBook = book;
      button.setAttribute('data-target', '#editBookModal');
    }
    if (mode === 'delete') {
      this.deleteBook = book;
      button.setAttribute('data-target', '#deleteBookModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
