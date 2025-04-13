import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NotesiteComponent } from './pages/notesite/notesite.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,NotesiteComponent,ProfileComponent,MenuComponent,LoginComponent,RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jegyzet';
  page = 'login'
  changemenu(actualpage:string){
    this.page = actualpage;
  }
}
