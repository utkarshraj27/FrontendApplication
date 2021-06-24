import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Products } from '../myservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  message: string;

  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(addproduct:Products):any{
    console.log(addproduct);
     this.myservice.addProduct(addproduct).subscribe(data => {
      this.message=data});
  }

}
