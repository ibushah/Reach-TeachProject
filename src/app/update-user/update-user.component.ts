import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from '../services/auth.service'
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  @Input() email:any;
  display=false;
  userType="USER";
  value;
  user="";
  constructor(private service:AuthService,private messageService:MessageService) { }

  ngOnInit() {
    
  }
  showDialog() {
    console.log(this.email)
    this.service.getUser(this.email).subscribe((response)=>
    {
      console.log(response)
     
      this.user=response.email;
      response.userType==="ADMIN"?this.value=true:this.value=false;
      this.userType=response.userType;
    },(error)=>
    {
     
    })
    this.display = true;
  }

  submit()
  {
    let obj={
      email:this.user,
      userType:this.value?"ADMIN":"USER",

      active:true
    }
    
  
    this.service.updateUser(this.email,obj)
    .subscribe((response)=>
    { this.display=false;
      this.messageService.add({severity:'info', summary:'Successful', detail:response});
      console.log(response)
    },(error)=>
    {
      this.messageService.add({severity:'danger', summary:'Failed', detail:error.error});
    }
    )
  }
}
