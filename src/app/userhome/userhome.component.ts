import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Users } from '../myservice.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  user = new Users();
  msg:string;
  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }
loginUser(){
this.myservice.loginUserFromRemote(this.user).subscribe(
data =>{console.log("response recieved");
localStorage.setItem('EmailId', JSON.stringify(this.user.emailId));
this.router.navigate(['/home'])
},
error =>{
  console.log("Exception occured");
  this.msg= " Bad credentials, please enter valid emailId and Password";
} 

)
}  


}
