import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { BookServiceComponent } from './book-service/book-service.component';
import { BookingacknowledgementComponent } from './bookingacknowledgement/bookingacknowledgement.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';

import { GetProductbyidComponent } from './get-productbyid/get-productbyid.component';
import { GetstatusComponent } from './getstatus/getstatus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MakepaymentComponent } from './makepayment/makepayment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ViewAllBookingsComponent } from './view-all-bookings/view-all-bookings.component';
import { ViewMyBookingsComponent } from './view-my-bookings/view-my-bookings.component';




const routes: Routes = [{path:'applogin',component:LoginComponent},
{path:'',component:NavbarComponent},
{path:'adduser',component:AddUserComponent},
{path:"userhome",component:UserhomeComponent},
{path:"home",component:HomeComponent},
{path:"adminhome",component:AdminhomeComponent},
{path:"adminLogin",component:AdminComponent},
{path:"addproduct",component:AddProductComponent},
{path:"listproduct",component:ProductListComponent},
{path:"getproductbyid",component:GetProductbyidComponent},
{path:"updateproduct",component:UpdateProductComponent},
{path:"customerlist",component:CustomerlistComponent},
{path:"bookservice",component:BookServiceComponent},
{path:"bookingacknowledgement",component:BookingacknowledgementComponent},
{path:"viewMyBookings",component:ViewMyBookingsComponent},
{path:"viewAllBookings",component:ViewAllBookingsComponent},
{path:"makepayment",component:MakepaymentComponent},
{path:"getstatus",component:GetstatusComponent},
{path:"navbar",component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,AddUserComponent,UserhomeComponent,HomeComponent
  ,AdminhomeComponent,AdminComponent,AddProductComponent,ProductListComponent,GetProductbyidComponent,
UpdateProductComponent,CustomerlistComponent,BookServiceComponent,BookingacknowledgementComponent, MakepaymentComponent,
 ViewAllBookingsComponent, ViewMyBookingsComponent,GetstatusComponent
]