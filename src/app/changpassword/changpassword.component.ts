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

  user: String;
  showForm = false;
  constructor(private router: Router, private service: AuthService, private messageSerivce: MessageService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
  }


  routeToMain() {
    this.router.navigate([''])
  }

  submit(obj) {


    this.service.changePassword(obj).subscribe((response) => {
      this.messageSerivce.add({ severity: 'info', summary: 'Successful', detail: response });

    }, error => {
      console.log(error)
      this.messageSerivce.add({ severity: 'error', summary: 'Failed', detail: error.error });
    });
  }

  routeToForgetPassComponent() {
    this.router.navigate(['forgot-password']);
  }
  routeToOnboarding()
  {
    this.router.navigate(['register']);
  }


}
