import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-register-onboarding',
  templateUrl: './register-onboarding.component.html',
  styleUrls: ['./register-onboarding.component.css']
})
export class RegisterOnboardingComponent implements OnInit {

  items2:Array<Object>=[];
  formShow:any = 1;
  activeItem: any;
  active:any=1;
  selectedPlan:any;
  planners:Array<Object>;

 
  constructor(private route:Router) { 
    this.planners=[
      {type:'Basic',charges:45,users:1,students:5},
      {type:'Standard',charges:120,users:5,students:20},
      {type:'Pro',charges:450,users:20,students:100},
      {type:'Enterprise 1',charges:650,users:40,students:250},
      {type:'Enterprise 2',charges:1200,users:100,students:500},
      {type:'Enterprise 3',charges:2250,users:200,students:1000}
  
    ]
  }

  ngOnInit() {
    
   this.items2 = [
      { label: 'Details', icon: 'fa fa-fw fa-bar-chart', text: "Complete your account details" },
      { label: 'Plan', icon: 'fa fa-fw fa-calendar', text: "Select your price plan" },
      { label: 'Billing', icon: 'fa fa-fw fa-book', text: "Confirm your pay" }
    ];
    this.activeItem = this.items2[0];
   
  }
  routeToLogin() {
    this.route.navigate(['login'])
  }
  planSelect(p)
  { 
    this.selectedPlan=p;
    this.active=3;
    this.activeItem=this.items2[2]
  }
  
  submit()
  {
    this.active=2;
    this.activeItem = this.items2[1];
  }

}
