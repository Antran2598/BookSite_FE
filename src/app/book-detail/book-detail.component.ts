import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model/book';
import { HttpErrorResponse } from '@angular/common/http';
import { BookService } from '../service/book.service';
import { TokenStorageService } from '../service/token-storage.service';
import { CartService } from '../service/cart.service';
import { Cart } from '../model/cart';
import { User } from '../model/user';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book!: Book;
  id: any;
  currentUser:any;
  cart: Cart | any;
  constructor(private bookService: BookService, private route: ActivatedRoute,private tokenStorageService: TokenStorageService, private cartService: CartService,private router: Router) {
    this.currentUser=tokenStorageService.getUser();
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getBookDetail();
  }

  getBookDetail() {
    this.bookService.getOneBook(this.id).subscribe(
      (response: any) => {
        this.book = response.data;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    }

    addToCart(itemId: number|undefined) {
      this.cart = {userId:this.currentUser.id,itemId:itemId};
      this.cartService.addCart(this.cart).subscribe(data => {
        console.log(data);
        alert('Add success');
        this.router.navigate(['/cartItems']);
      })
      
    }
}


