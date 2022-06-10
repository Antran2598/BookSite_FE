import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/model/author';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-insert-book',
  templateUrl: './insert-book.component.html',
  styleUrls: ['./insert-book.component.css'],
})
export class InsertBookComponent implements OnInit {
  book: Book = {
    bookName:"",
    author:0,
    category:0,
    description:"",
    originalPrice:0,
    salePrice:0,
    publisher:0,
    quantity:0,
    picture:""
  };
  authorList:any;
  publisherList:any;
  cateList:any;
  errorMessage = '';
  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.getAuthorList();
    this.getPublisherList();
    this.getCateList();
  }
  
  getAuthorList(){
    this.bookService.getAuthors().subscribe((response: any) => {
      this.authorList = response.data;
    });
  }

  getPublisherList(){
    this.bookService.getPublishers().subscribe((response: any) => {
      this.publisherList = response.data;
    });
  }

  getCateList(){
    this.bookService.getCates().subscribe((response: any) => {
      this.cateList = response.data;
    });
  }

  public onAddBook() {
    this.bookService.addBooks(this.book).subscribe(
      (data) => {
        console.log(data);
        console.log(this.book);
        this.router.navigate(['/book']);
      },
      (error) => {
        this.errorMessage = error.error.message;
        console.log(error);
      }
    );
  }
}
