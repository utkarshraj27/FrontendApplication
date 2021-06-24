import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Products } from '../myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: string;
  products: Products[];
  constructor(private myservice: MyserviceService, public router: Router) {
    this.router=router;
   }

  ngOnInit(): any { 
    this.myservice.getProducts().subscribe(
    response => this.handleSuccessfulResponse(response),
  );
  }
  handleSuccessfulResponse(response) {
    console.log(response);
    this.products = response;
  }

  bookNow(serviceName:any) {
    console.log(serviceName);
    localStorage.setItem('ServiceName', JSON.stringify(serviceName));
    this.router.navigate(['/bookservice'])
  }

}
