import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MyserviceService {


  public addUser(adduser: Users) {

    console.log("ins service add");

    console.log(adduser);

    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');

    return this.httpService.post("http://localhost:8086/customer/add", adduser,
  { headers, responseType: 'text'});

  }


  constructor(private httpService: HttpClient) {
 
    this.httpService=httpService;

  }

  client: HttpClient;


 

  public loginUserFromRemote(user:Users):Observable<any>{

    return this.httpService.post("http://localhost:8086/customer/loginPage",user)


  }


  public loginAdmin(user:Users):Observable<any>{

    return this.httpService.post("http://localhost:8086/customer/login/admin",user)


  }

  public getProducts() {

    console.log("ins service get products");

    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');

    return this.httpService.get<Products>("http://localhost:8086/service");

  }


  delete(serviceName: string) {

    console.log("ins service delete");

    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');

    return this.httpService.get("http://localhost:8086/service/delete/" + serviceName,
  { headers, responseType: 'text'});
  }


  public getproductbyid(getproductById: number) {

    console.log("ins service add");

    console.log(getproductById);

    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');

    return this.httpService.get("http://localhost:8086/service/get/" +getproductById ,{responseType: 'json'});

  }



  

  public addProduct(addproduct: Products) {

    console.log("ins service add");

    console.log(addproduct);

    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');

    return this.httpService.post("http://localhost:8086/service/add", addproduct,
  { headers, responseType: 'text'});

  }

  updateproduct:
   Products;
  public update(updateproduct: Products) {

    this.updateproduct = updateproduct;

  }

  public updateMethod() {

    return this.updateproduct;

  }

  public onUpdate(updateproduct: Products) {

    console.log("ins service update");

    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');

    return this.httpService.put("http://localhost:8086/service/update", updateproduct,
  { headers, responseType: 'text'});

  }



  public getCustomers() {

    console.log("ins service get products");

    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');

    return this.httpService.get<Customer>("http://localhost:8086/customer");

  }


  deleteCustomer(emailId: string) {

    console.log("ins service delete");

    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');

    return this.httpService.get("http://localhost:8086/customer/delete/" + emailId,
  { headers, responseType: 'text'});

  }


  // public addBooking(booking:Booking):Observable<any>{

  //   return this.httpService.post("http://localhost:8086/booking/add",booking)


  // }


   public addBooking(booking: Booking): Observable<BookingDetails> {

    let url = "http://localhost:8086/booking/add";

    let result: Observable<BookingDetails> = this.httpService.post<BookingDetails>(url, booking);

    console.log(JSON.stringify(result));

    return result;

  }


  public cancelPayment(bookingId:string){
    
    let url = "http://localhost:8086/payment/delete/"+bookingId;
    let result: Observable<boolean> = this.httpService.delete<boolean>(url);
    return result;
  }

  viewMyBookings(custId: String): Observable<BookingDetails> {

    console.log(custId);

    let url = "http://localhost:8086/booking/viewMyBooking/"+custId;

    console.log(url);

    let result: Observable<BookingDetails> = this.httpService.get<BookingDetails>(url);

    console.log("Service Method Executed");

    console.log(JSON.stringify(result));

    return result;

  }

  cancelBooking(bookingId:String): Observable<String> {

    let url ="http://localhost:8086/booking/deleteBooking/" + bookingId;

    let result: Observable<String> = this.httpService.delete<String>(url);

    return result;

  }

  viewAllBookings(): Observable<BookingDetails> {

    let url = "http://localhost:8086/booking/findAll";

    let result: Observable<BookingDetails> = this.httpService.get<BookingDetails>(url);

    return result;
  }

  approveBookingStatus(bookingId:String):Observable<Booking>{
    console.log("Inside approve booking ");

    let url ="http://localhost:8086/booking/approveBooking/"+bookingId;
    console.log(url);
    let result: Observable<Booking> = this.httpService.get<Booking>(url);

    return result;
  }

  makePayment(payment : Payment, bookingId : string): Observable<PaymentDetails>{
    let url = "http://localhost:8086/payment/add/" + bookingId;

    let result : Observable<PaymentDetails> = this.httpService.post<PaymentDetails>(url, payment);

    console.log(JSON.stringify(result));

    return result;
  }

}

export class Users {

  unserName: string;

  emailId: string;

  userPassword: string;

  mobileNumber:string;

  address:string;

}


export class Products {

  
  serviceId: number;

  serviceName:string;

  serviceCost:number;

  
  }


export class Customer {


  emailId : string;

  custId : string;

  userName:string;

  userPassword:string;

  mobileNumber:string;

  address:string;

}


export class BookingDetails {

bookingId :string;

bookingDate : string;

emailId :string;

customerName :string;

serviceId:number;

serviceName:string;

custId:string;

serviceCost:number;

}


export class Booking{

  bookingDate:string;

  emailId:string;

  serviceName:string;

  serviceId:number;

}

export class Payment{

  //product : Products;

  //booking : Booking;

  cardNumber : string;

  expirationDate : string;

  cvCode : number;

  cardOwner : string;
}

export class PaymentDetails{
  paymentId : string;

  bookingId : string;

  bookingDate : string;

  emailId : string;

  customerName : string;

  serviceName : string;

  serviceCost : string;
}

