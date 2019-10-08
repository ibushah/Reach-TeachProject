import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private service: AuthService, private messageService: MessageService) { }

  ngOnInit() {
  }

  submit(e) {
    this.service.forgotPassword(e).subscribe((response) => {

      this.messageService.add({ severity: 'info', summary: 'Successful', detail: response });

    }, (error) => {

      this.messageService.add({ severity: 'error', summary: 'Failed', detail: error.error });
    })



  }

}
