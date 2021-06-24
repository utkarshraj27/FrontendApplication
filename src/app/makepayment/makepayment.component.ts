import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Booking, MyserviceService, Payment, PaymentDetails } from '../myservice.service';

@Component({
  selector: 'app-makepayment',
  templateUrl: './makepayment.component.html',
  styleUrls: ['./makepayment.component.css']
})
export class MakepaymentComponent implements OnInit {
  payment: Payment;
  bookingId: string;
  booking: Booking;
  msg: string;
  paymentDetail: PaymentDetails;
  constructor(private myservice: MyserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(payment: Payment): any {

    console.log(payment);
    this.bookingId = JSON.parse(localStorage.getItem('BookingId'));
    /*this.payment=new Payment(); 
    this.payment.cardNumber = JSON.parse(localStorage.getItem('CardNumber'));
    this.payment.expirationDate = JSON.parse(localStorage.getItem('ExpirationDate'));
    this.payment.cvCode = JSON.parse(localStorage.getItem('CvCode'));
    this.payment.cardOwner = JSON.parse(localStorage.getItem('CardOwner'));
    //this.booking.bookingDate = booking.bookingDate;
   */
  let observable: Observable<Booking> = this.myservice.approveBookingStatus(this.bookingId);
  observable.subscribe(booking => {
   // this.isDeleted = booking;
    //this.serviceList = this.bookingDetail.serviceList;
    console.log(JSON.stringify(this.booking));
    // this.productList=JSON.stringify(this.cartDetail);
    console.log("inside success callback =" + this.booking);

  }, err => this.msg = err.error);


    console.log(JSON.stringify(payment));
    this.myservice.makePayment(payment, this.bookingId).subscribe(
      data => {
        console.log("response recieved");
        this.paymentDetail = data;
        console.log(JSON.stringify(this.paymentDetail));
        //localStorage.setItem('PaymentId', JSON.stringify(this.paymentDetail.paymentId));
        alert(JSON.stringify(this.paymentDetail));
        console.log("inside payment method")
        let observable: Observable<Booking> = this.myservice.approveBookingStatus(this.bookingId);
       this.router.navigate(['/viewMyBookings']);
      },
      error => {
        console.log("Exception occured");
        this.msg = " Something went wrong";
      }

    )
  }
}
