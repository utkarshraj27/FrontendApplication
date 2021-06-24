import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-get-productbyid',
  templateUrl: './get-productbyid.component.html',
  styleUrls: ['./get-productbyid.component.css']
})
export class GetProductbyidComponent implements OnInit {

  message:string;
  id:number;
  search:boolean=false;
  Product:any;
  private router: Router
  constructor(private myservice: MyserviceService, router: Router) {
    this.router=router;
  }
  ngOnInit(): any {
  }
  getStatus(){
    this.myservice.getproductbyid(this.id).subscribe(
      
      (data)=>this.Product=data);
    console.log(this.Product)

      this.search= true; 
    }
}
