import { Component } from '@angular/core';

@Component({
  selector: 'app-component-navbar',
  standalone: false,
  templateUrl: './component-navbar.html',
  styleUrl: './component-navbar.scss'
})
export class ComponentNavbar {
  dropdownOpen = false;
  userImageExists: any;
  userImagePath: any;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }


}
