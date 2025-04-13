import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  imports: [],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  router:any;
  constructor(router:Router){}
  
  changePage(){
    this.router.navigateUrl("/login");
  }
}
