import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  colorStyler: Object;
  @Input() plan: any;
  @Input() charges: String;
  @Input() users: Number;
  @Input() students: Number;
  @Output() planEmitter = new EventEmitter();
  bgColor = "blue";



  constructor(private route: Router) {
    this.colorStyler = {
      Pro: 'rgb(154, 230, 41)',
      Basic: 'rgb(243, 29, 29)',
      Standard: 'rgb(243, 220, 10)',
      EnterPriseI: 'rgb(154, 54, 212)',
      EnterPriseJ: 'orange',
      EnterPriseK: 'rgb(23, 130, 156)'
    }


  }



  ngOnInit() {

    this.bgColorSetter()

  }



  planClick(p) {

    this.planEmitter.emit(p);
  }

  
  bgColorSetter() {

    this.bgColor = this.colorStyler[this.plan] ? this.colorStyler[this.plan] : null;
    if (!this.bgColor) {
      if (this.plan == "Enterprise 1")
        this.bgColor = this.colorStyler["EnterPriseI"]
      else if (this.plan == "Enterprise 2")
        this.bgColor = this.colorStyler["EnterPriseJ"]
      else if (this.plan == "Enterprise 3")
        this.bgColor = this.colorStyler["EnterPriseK"]
      else
        this.bgColor = 'blue'
    }
  }

}
