import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginBtn = true;
  isCollapsed=true;
  constructor(private router: Router) { }

  ngOnInit() {

  

  }
  ngDoCheck() {
  
    if (this.router.url === '/login')
      this.loginBtn = false;
    else
      this.loginBtn = true;
  }
  routeToLoginComponent() {
    this.router.navigate(['login']);

  }

}
