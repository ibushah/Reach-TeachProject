import { MessageService } from "primeng/api";
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import {AuthService} from '../services/auth.service'


@Component({
  selector: 'app-changpassword',
  templateUrl: './changpassword.component.html',
  styleUrls: ['./changpassword.component.css']
})
export class ChangpasswordComponent implements OnInit {

  dropItems;
  user;
  constructor(private router: Router,private service:AuthService,private messageSerivce:MessageService) { }

  ngOnInit() {
    this.user=this.getUser();
   this.getUsertypeNload();
  }

  dropdownchange(e)
  {
    console.log(e)
    if(e.value==="manageAccounts")
    this.router.navigate(['/manageaccounts']);
    else if(e.value==="logout")
    this.router.navigate(['/']);

  }
  routeToMain()
  {
    this.router.navigate([''])
  }

  submit(obj)
  {
    this.service.changePassword(obj).subscribe((response)=>
    {
      this.messageSerivce.add({severity:'info',summary:'Successful',detail:response});
    },error => {
      console.log(error)
      this.messageSerivce.add({ severity:'error', summary:'Failed', detail:error.error });
    });
  }
  routeToMainComponent()
  {
    this.router.navigate(['/main'])
  }
  getUser()
  {
   return sessionStorage.getItem("user");
  }
  getUsertypeNload() {
    let userType = sessionStorage.getItem("userType");

    if (userType === "ADMIN") {
      this.dropItems = [
        { label: 'Options', value: null },
        { label: 'Manage accounts', value: "manageAccounts" },
        { label: 'Change Password', value: "changePassword" },
        { label: 'Logout', value: "logout" },
      ];
    }
    else {
      this.dropItems = [
        { label: 'Options', value: null },
        { label: 'Change Password', value: "changePassword" },
        { label: 'Logout', value: "logout" },
      ];
    }
  }
}
