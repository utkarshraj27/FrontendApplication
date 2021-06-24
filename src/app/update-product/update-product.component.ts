import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Products } from '../myservice.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  obj1: Products;
  product: Products[];
  message: string;
  constructor(private myservice: MyserviceService, private router: Router) {
    this.obj1 = this.myservice.updateMethod();
  }
  onUpdate(updateproduct: Products): any {
    return this.myservice.onUpdate(updateproduct).subscribe(data => {
      this.message = data
    });
  }
  ngOnInit(): void {
  }


}
