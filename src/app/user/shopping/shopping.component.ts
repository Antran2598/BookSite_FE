import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { Cart } from 'src/app/model/cart';
import { User } from 'src/app/model/user';
import { BookService } from 'src/app/service/book.service';
import { CartService } from 'src/app/service/cart.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit {
  router: any;
  users: User | any;
  currentUser:any;
  constructor(private bookService: BookService,private tokenStorageService: TokenStorageService, private cartService: CartService) {
    this.currentUser=tokenStorageService.getUser();
    
  }
  public books: Book[] = [];
  book!: Book ;
  cart: Cart | any;
  cartBooks: any;
  
  ngOnInit() {
    this.getBooks();
    // //from localstorage retrieve the cart item
    // let data = localStorage.getItem('cart');
    // //if this is not null convert it to JSON else initialize it as empty
    // if (data !== null) {
    //   this.cartBooks = JSON.parse(data);
    // } else {
    //   this.cartBooks = [];
    // }
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
  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(["/login"]);
  }

  public searchBooks(key: string): void {
    console.log(key);
    const results: Book[] = [];
    for (const book of this.books) {
      if (book.bookName?.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(book);
      }
    }
    this.books = results;
    if (results.length === 0 || !key) {
      alert('No books found');
      return this.getBooks();
    }
  }

  addToCart(itemId: number|undefined) {
    this.cart = {userId:this.currentUser.id,itemId:itemId};
    this.cartService.addCart(this.cart).subscribe(data => {
      console.log(data);
      alert('Add success');
    })
    
  }

  // updateCartData(cartData: any) {
  //   this.cartBooks = cartData;
  // }

  // goToCart() {
  //   this.router.navigate(['/cart']);
  // }

  // emptyCart() {
  //   this.cartBooks = [];
  //   localStorage.clear();
  // }
}
