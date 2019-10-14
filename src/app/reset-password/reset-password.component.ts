import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../services/auth.service'
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  dropItems;
  user: any;
  token: String;
  showForm: Boolean = false;
  response: String;

  constructor(private router: Router, private service: AuthService, private messageSerivce: MessageService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.token = this.activateRoute.snapshot.params['token'];
    this.tokenChecker();
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
        this.showForm = false;
        this.response = error.error;

      })
  }

  submit(obj) {

    this.service.resetChangePassword(this.token, obj).subscribe((response) => {
      this.messageSerivce.add({ severity: 'info', summary: 'Successful', detail: response });
   
    }, error => {
    
      this.messageSerivce.add({ severity: 'error', summary: 'Failed', detail: error.error });
    });
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
