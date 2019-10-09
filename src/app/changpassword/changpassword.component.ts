import { MessageService } from "primeng/api";
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../services/auth.service'
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'app-changpassword',
  templateUrl: './changpassword.component.html',
  styleUrls: ['./changpassword.component.css']
})
export class ChangpasswordComponent implements OnInit {

  dropItems;
  user;
  token;
  showForm = false;
  constructor(private router: Router, private service: AuthService, private messageSerivce: MessageService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.token = this.activateRoute.snapshot.params['token'];
    this.tokenChecker();

    //   this.user=this.getUser();
    //  this.getUsertypeNload();
  }

  dropdownchange(e) {
    console.log(e)
    if (e.value === "manageAccounts")
      this.router.navigate(['/manageaccounts']);
    else if (e.value === "logout")
      this.router.navigate(['/']);

  }
  routeToMain() {
    this.router.navigate([''])
  }

  tokenChecker() {
    this.service.tokenChecker(this.token).subscribe((response) => {
      this.showForm = true;
    },
      error => {
      this.showForm = false
      console.log(error)
    })
  }

  submit(obj) {
    if (this.token) {


      this.service.changePassword(this.token, obj).subscribe((response) => {
        this.messageSerivce.add({ severity: 'info', summary: 'Successful', detail: response });
        console.log(response)
      }, error => {
        console.log(error)
        this.messageSerivce.add({ severity: 'error', summary: 'Failed', detail: error.error });
      });
    }
    else {
      this.messageSerivce.add({ severity: 'error', summary: 'Failed', detail: "Inavalid token" });
    }
  }
  routeToMainComponent() {
    this.router.navigate(['/main'])
  }
  getUser() {
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
