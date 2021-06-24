import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookingDetails, MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-view-all-bookings',
  templateUrl: './view-all-bookings.component.html',
  styleUrls: ['./view-all-bookings.component.css']
})
export class ViewAllBookingsComponent implements OnInit {

  bookingDetail: BookingDetails;
  serviceList: any;
  service: MyserviceService;
  booking: any;
  msg: any;
  addedBooking: any;
  custId: String;
  serviceId:Number;
  bookingId:String;
  isDeleted:String;

  constructor(service:MyserviceService, private _router: Router) {
    console.log("Inside View my booking");
    this._router = _router;
    this.service = service;
    this.viewAllBookings();
  }


  private viewAllBookings() {
    let observable: Observable<BookingDetails> = this.service.viewAllBookings();
    observable.subscribe(booking => {
      this.bookingDetail = booking;
      //this.serviceList = this.bookingDetail.serviceList;
      console.log(JSON.stringify(this.bookingDetail));
      // this.productList=JSON.stringify(this.cartDetail);
      //console.log("inside success callback =" + this.cartDetail);

    }, err => this.msg = err.error);
  }

  

  // updateItemIntoCart(productId: string) {
  //   this._router.navigate(['/updateItemIntoCart', productId])
  // }

  ngOnInit(): void {
  }

}


