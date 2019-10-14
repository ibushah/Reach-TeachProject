import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router'

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  email: String = "";
  value: any = 0;
  loader: Boolean = false;
  displayMsg=false;
  constructor(private service: AuthService, private messageService: MessageService, private route: Router) { }

  ngOnInit() {
    this.load()
  }

  submit(form) {
    this.loader = true;
    this.service.resetPassword(this.email).subscribe((response) => {
      this.loader = false;
      this.displayMsg=true;
      this.messageService.add({ severity: 'info', summary: 'Successful', detail: response });

    }, (error) => {
      this.loader = false;
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: error.error });
    })
  }


  load() {
    setInterval(() => {
      this.value = this.value + Math.floor(Math.random() * 10) + 1;

    }, 2000);
  }
  routeToLogin() {
    this.route.navigate(['login'])
  }
  routeToRegister() {
    this.route.navigate(['register'])
  }
}
