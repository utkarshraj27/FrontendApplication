import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Products } from '../myservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  message: string;
  products: Products[];
  constructor(private myservice: MyserviceService, public router: Router) {this.getProducts() }

  ngOnInit(): any { 
    
  }
  private getProducts()
  {
    this.myservice.getProducts().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    console.log(response);
    this.products = response;
  }

  update(updateproduct: Products) {
    this.myservice.update(updateproduct);
    this.router.navigate(['/updateproduct']);
  }


  delete(deleteproduct: Products): any 
  {
     var r = confirm("Are you sure to delete this service permanently ??");
     if(r==true)
     {
      this.myservice.delete(deleteproduct.serviceName).subscribe(data => {
        this.getProducts();
     });
    
     }
     else
    {
      alert("Operation Cancelled");
    }
  }
  
}
