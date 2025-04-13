import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private routernote:Router,private routerProfile:Router){}

changePage(){
  this.routernote.navigateByUrl("/notesite");
}

changePage2(){
  this.routerProfile.navigateByUrl("/profile");
}
}
