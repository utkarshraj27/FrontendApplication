import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking, BookingDetails, MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-book-service',
  templateUrl: './book-service.component.html',
  styleUrls: ['./book-service.component.css']
})
export class BookServiceComponent implements OnInit {

  booking:Booking;
  msg:string;
  serviceName:any;
  serviceId:number;
  bookingDetails:BookingDetails;

constructor(private route: ActivatedRoute,private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  
onBook(form:any){
  let data = form.value;
  console.log(data.time);
 this.booking=new Booking(); 
 this.booking.bookingDate=data.time;
 this.booking.serviceName = JSON.parse(localStorage.getItem('ServiceName'));
 this.booking.emailId = JSON.parse(localStorage.getItem('EmailId'));
 //this.booking.bookingDate = booking.bookingDate;

 console.log(JSON.stringify(this.booking));
this.myservice.addBooking(this.booking).subscribe(
data =>{console.log("response recieved");
this.bookingDetails=data; 
console.log(JSON.stringify(this.bookingDetails));
alert(JSON.stringify(this.bookingDetails));
localStorage.setItem('CustId', JSON.stringify(this.bookingDetails.custId));
this.router.navigate(['/viewMyBookings']);
//this.router.navigate(['/makepayment']);

  //this.router.navigate(['/bookingacknowledgement'])
},
error =>{
  console.log("Exception occured");
  this.msg= " Something went wrong";
} 

)
}  

}
