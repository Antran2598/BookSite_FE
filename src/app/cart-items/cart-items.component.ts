import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { Book } from '../model/book';
import { CartItem } from '../model/cartItem';
import { BookService } from '../service/book.service';
import { CartService } from '../service/cart.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  cartItem1!: CartItem;
  cartItems:any[]=[];
  amount:number| any;
  public deleteBook: Book | any;
  price:number| any;
  book!: Book ;
  constructor(private tokenStorageService: TokenStorageService, private cartService: CartService, private bookService: BookService) {  
    this.currentUser=tokenStorageService.getUser();
  }
  currentUser:any;
  ngOnInit(): void {
    this.getCartItem(this.currentUser.id);
    
  }

  getCartItem(Id:number){
    return this.cartService.getCartItem(Id).subscribe((res:any) =>{
      this.cartItems=JSON.parse(JSON.stringify(res)).data.cartItems;
      this.getBookName(this.book.id!);
      console.log(this.cartItems);
    })
  }

  getBookName(bookId: number) {
    this.bookService.getOneBook(this.book.id!).subscribe((res: any) => {
      
      console.log(res);
    });
  }
 
  public onOpenModal(book: Book | any, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.cartItems = book;
      button.setAttribute('data-target', '#editBookModal');
    }
    if (mode === 'delete') {
      this.deleteBook = book;
      button.setAttribute('data-target', '#deleteBookModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onDeleteBook(bookId: number) {
    this.cartService.deleteItem(bookId).subscribe(
      (response: void) => {
        console.log(response);
        this.getCartItem(this.currentUser.id);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    )
  }

}
