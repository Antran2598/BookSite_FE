import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../model/order';
import { CartService } from '../service/cart.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  shippingList:any;
  paymentList:any;
  errorMessage = '';
  currentUser:any;
  order: Order = {
  
    userId: 0,
    paymentMethod:0,
    shippingFee:0,
    address:""
  };
  orderTest:any;
  constructor(private tokenStorageService: TokenStorageService, private cartService: CartService, private router: Router) { 
    this.currentUser=tokenStorageService.getUser();

  }

  ngOnInit(): void {
    this.getshippingList();
    this.getPaymentList();
  }

  getshippingList(){
    this.cartService.getShippingFee().subscribe((response: any) => {
      this.shippingList = response.data;
    });
  }

  getPaymentList(){
    this.cartService.getPayment().subscribe((response: any) => {
      this.paymentList = response.data;
    });
  }

  public onAddOrder() {
    this.order.userId=this.currentUser.id  ;
    this.cartService.addOrder(this.order).subscribe(
      (data) => {
        console.log(data);
        alert("Submit Success");
        this.router.navigate(['/shopping']);
      },
      (error) => {
        this.errorMessage = error.error.message;
        console.log(error);
      }
    );
  }
}


