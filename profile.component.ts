import { Component, OnInit } from '@angular/core';
import { ProfileObject } from '../../../constant';
@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  profileObject: any = ProfileObject;
  selectedIndex: number = 0;

  ngOnInit(): void {
    // Kezdeti index beállítása
    this.selectedIndex = 0;
  }

  reload(index: number): void {
    // Az index beállítása a kiválasztott option alapján
    this.selectedIndex = index;
  }

  firstName: string = 'John';
  lastName: string = 'Doe';
  profileImage: string = 'https://via.placeholder.com/150'; // Alapértelmezett profilkép URL

}
