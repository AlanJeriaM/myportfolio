// navbar.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isDarkMode = false;
  isMobileMenuOpen = false;

  ngOnInit() {
    // Cargar preferencia de dark mode del localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark:bg-gray-900', 'bg-gray-900');
      document.body.classList.remove('bg-white');
    } else {
      document.body.classList.add('bg-white');
      document.body.classList.remove('dark:bg-gray-900', 'bg-gray-900');
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark:bg-gray-900', 'bg-gray-900');
      document.body.classList.remove('bg-white');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark:bg-gray-900', 'bg-gray-900');
      document.body.classList.add('bg-white');
    }

    // Guardar preferencia
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
