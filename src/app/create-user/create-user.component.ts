import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  loader = false;
  email;
  value;
  display = false;

  constructor(private service: AuthService, private messageService: MessageService) { }

  ngOnInit() {
   
  }
  showDialog() {
    this.display = true;
  }

  submit() {
    this.loader = true;
    let obj = {
      email: this.email
    };

    (this.value) ? obj["userType"] = "ADMIN" : obj["userType"] = "USER";

    this.service.createNewUser(obj).subscribe((response) => {
      this.loader = false;
      this.messageService.add({ severity: 'info', summary: 'Sucessful', detail: response });
      this.display = false;
     
    },
      (error) => {
        this.loader = false;
        this.messageService.add({ severity: 'error', summary: 'Failed', detail:error.error });

      })
  }

}

