import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyserviceService } from './myservice.service';
import { GetProductbyidComponent } from './get-productbyid/get-productbyid.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { BookServiceComponent } from './book-service/book-service.component';
import { BookingacknowledgementComponent } from './bookingacknowledgement/bookingacknowledgement.component';
import { ViewMyBookingsComponent } from './view-my-bookings/view-my-bookings.component';
import { ViewAllBookingsComponent } from './view-all-bookings/view-all-bookings.component';
import { MakepaymentComponent } from './makepayment/makepayment.component';
import { GetstatusComponent } from './getstatus/getstatus.component';
import { NavbarComponent } from './navbar/navbar.component';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    
 ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,FormsModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
