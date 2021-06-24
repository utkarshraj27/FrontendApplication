import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookingDetails, MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-view-my-bookings',
  templateUrl: './view-my-bookings.component.html',
  styleUrls: ['./view-my-bookings.component.css']
})
export class ViewMyBookingsComponent implements OnInit {

  bookingDetail: BookingDetails;
  serviceList: any;
  service: MyserviceService;
  booking: any;
  msg: any;
  addedBooking: any;
  custId: String;
  serviceId:Number;
  bookingId:string;
  isDeleted:String;
  paymentId:string;
  isCancel:boolean;

  constructor(service:MyserviceService, private _router: Router) {
    console.log("Inside View my booking");
    this._router = _router;
    this.service = service;
    this.getMyBookings();
  }


  private getMyBookings() {
    this.custId = JSON.parse(localStorage.getItem('CustId'));
    let observable: Observable<BookingDetails> = this.service.viewMyBookings(this.custId);
    observable.subscribe(booking => {
      this.bookingDetail = booking;
      //this.serviceList = this.bookingDetail.serviceList;
      console.log(JSON.stringify(this.bookingDetail));
      // this.productList=JSON.stringify(this.cartDetail);
      //console.log("inside success callback =" + this.cartDetail);

    }, err => this.msg = err.error);
  }

  cancelBooking(bookingId: string) {
    this.bookingId=bookingId;
    console.log(this.bookingId);
    if (confirm("Are You Sure Want To Cancel Booking!!")) {
      let observable: Observable<String> = this.service.cancelBooking(this.bookingId);
      observable.subscribe(booking => {
        this.isDeleted = booking;
        //this.serviceList = this.bookingDetail.serviceList;
        console.log(this.isDeleted);
        this.getMyBookings();

      }, err => {this.msg = err.error;
      this.getMyBookings();});
    }
  }

  onPayment(bookingId:string) {
    this.bookingId = bookingId;
    console.log(this.bookingId);
    localStorage.setItem('BookingId', JSON.stringify(bookingId));
    this._router.navigate(['/makepayment'])
  }

  cancelPayment(bookingId:string){
    this.bookingId = bookingId;
  //  this.paymentId = JSON.parse(localStorage.getItem('PaymentId'));
    console.log(this.paymentId);
    alert("Are you sure want to Cancel Booking ?? Payment will be refunded back to your account");
    console.log(this.bookingId);
    
    let observable: Observable<boolean> = this.service.cancelPayment(this.bookingId);
    observable.subscribe(booking => {
      this.isCancel = booking;
      //this.serviceList = this.bookingDetail.serviceList;
      console.log(this.isCancel);
      this.cancelBooking(this.bookingId);
      this.getMyBookings();

    }, err => {this.msg = err.error;
    this.getMyBookings();});
  }

  

  // updateItemIntoCart(productId: string) {
  //   this._router.navigate(['/updateItemIntoCart', productId])
  // }

  ngOnInit(): void {
  }

}


