import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  items2;
  formShow = 1;
  activeItem: any;
  active=1;
  constructor() { }

  ngOnInit() {
    
   this.items2 = [
      { label: 'Details', icon: 'fa fa-fw fa-bar-chart', text: "Complete your account details" },
      { label: 'Plan', icon: 'fa fa-fw fa-calendar', text: "Select your price plan" },
      { label: 'Billing', icon: 'fa fa-fw fa-book', text: "Confirm your pay" }
    ];
    this.activeItem = this.items2[0];
   
  }
  activateMenu(a)
  {
    this.active=a;
  }

  change()
  {
    this.active=2;
    this.activeItem = this.items2[1];
  }

}
