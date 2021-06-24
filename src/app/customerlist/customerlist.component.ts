import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  message: string;
  customer: Customer[];
  constructor(private myservice: MyserviceService, public router: Router) {this.getMyCustomers() }

  ngOnInit(): any { 
    
  }
  private getMyCustomers()
  {
    this.myservice.getCustomers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    console.log(response);
    this.customer = response;
  }
  delete(deleteproduct: Customer): any 
  {
     var r = confirm("Are you sure to delete this customer from database ??");
     if(r==true)
     {
      this.myservice.deleteCustomer(deleteproduct.emailId).subscribe(data => {
        this.getMyCustomers();
     });
    
     }
     else
    {
      alert("Operation Cancelled");
    }
  }



}
