import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-menu',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  @Output() menu:EventEmitter<string> = new EventEmitter();
  changemenu(actualpage:string){
    this.menu.emit(actualpage);
  }
}
