import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Publisher } from 'src/app/model/publisher';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  public publishers: Publisher[] | any;
  public editPublisher: Publisher = {};
  public deletePublisher: Publisher | any;
  p: number = 1;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getPublishers();
  }

  public getPublishers(): void {
    this.bookService.getPublishers().subscribe(
      (response: any) => {
        this.publishers = response.data;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchPublisher(key: string): void {
    console.log(key);
    const results: Publisher[] = [];
    for (const publisher of this.publishers) {
      if (publisher.pubName.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(publisher);
      }
    }
    this.publishers = results;
    if (results.length === 0 || !key) {
      this.getPublishers();
    }
  }

  public onAddPublisher(addForm: NgForm) {
    document.getElementById('add-user-form')?.click();
    this.bookService.addPublishers(addForm.value).subscribe(
      (response: Publisher) => {
        console.log(addForm);
        console.log(response);
        this.getPublishers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    )
  }

  public onUpdatePublisher() {
    console.log(this.editPublisher);
    this.bookService.updatePublisher(this.editPublisher).subscribe(
      (response: Publisher) => {
        console.log(response);
        console.log(this.editPublisher);
        alert("Update Success")
        this.getPublishers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    )
  }


  public onDeleteAuthor(pubId: number) {
    this.bookService.deletePublishers(pubId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPublishers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    )
  }

  public onOpenModal(publisher: Publisher | any, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPublisherModal');
    }
    if (mode === 'edit') {
      this.editPublisher = publisher;
      button.setAttribute('data-target', '#editPublisherModal');
    }
    if (mode === 'delete') {
      this.deletePublisher = publisher;
      button.setAttribute('data-target', '#deletePublisherModal');
    }
    container?.appendChild(button);
    button.click();
  }

}
