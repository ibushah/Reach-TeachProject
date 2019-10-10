import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from '../services/login.service'
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isCollapsed = true;
    constructor(private route: Router, private service: LoginService, private messageService: MessageService) { }

  ngOnInit() {

  }

  login(e) {
    sessionStorage.clear();
    console.log(e)
    this.service.login(e.email, e.password).subscribe((res) => {
      console.log('token', res);

      sessionStorage.setItem('token', res.result.token);
      sessionStorage.setItem('user', res.result.email);
      sessionStorage.setItem('userType', res.result.userType);
      this.messageService.add({ severity: 'info', summary: 'Service Message', detail: res.message });
      setTimeout(() => {
        this.route.navigate(['']);
      }, 1000);
    }, e => {
     
      this.messageService.add({ severity: 'error', summary: 'Service Message', detail: e.error.error });
    });

  }

  routeToForgetPassComponent() {

    this.route.navigate(['forgotpassword']);
  }

}