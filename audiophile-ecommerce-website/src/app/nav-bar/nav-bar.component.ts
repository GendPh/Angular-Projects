import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, CategoryComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  showMenu: boolean = false;

  ActiveMenu() {
    this.showMenu = !this.showMenu;
  }
  ClassMenu() {
    return (this.showMenu) ? "top-16" : "top-0";
  }
}
