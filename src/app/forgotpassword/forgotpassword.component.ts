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

  constructor(private service: AuthService, private messageService: MessageService, private route: Router) { }

  ngOnInit() {
  }

  submit(e) {
    this.service.forgotPassword(e).subscribe((response) => {

      this.messageService.add({ severity: 'info', summary: 'Successful', detail: response });

    }, (error) => {

      this.messageService.add({ severity: 'error', summary: 'Failed', detail: error.error });
    })
  }

  routeToLogin() {
    this.route.navigate(['login'])
  }
  routeToRegister() {
    this.route.navigate(['register'])
  }
}
