import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService ,Users} from '../myservice.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  user = new Users();
  
  msg:string;
  

  
  constructor(private myservice: MyserviceService,private router: Router) { }


  ngOnInit(): void {
  }
  aLogin(){
    this.myservice.loginAdmin(this.user).subscribe(
      data =>{console.log("response recieved")
      this.router.navigate(['/adminLogin'])
      },
      error =>{
        console.log("Exception occured");
        this.msg= "Bad credentials, please enter valid emailId and Password" ;
      } 
      
      )
    
  }


}
