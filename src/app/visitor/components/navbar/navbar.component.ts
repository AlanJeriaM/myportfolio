import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isDarkMode: boolean = false;
  isMobileMenuOpen: boolean = false;
  isScrolled: boolean = false;

  ngOnInit(): void {
    // Cargar preferencia de dark mode del localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    // Solo actualizar isScrolled si el menú móvil no está abierto
    if (!this.isMobileMenuOpen) {
      this.isScrolled = window.scrollY > 50;
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Guardar preferencia
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }

  toggleMobileMenu(): void {
    console.log('Toggle mobile menu called. Current state:', this.isMobileMenuOpen);
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    console.log('New state:', this.isMobileMenuOpen);

    // Prevenir scroll del body cuando el menú está abierto
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
  }

  closeMobileMenu(): void {
    console.log('Close mobile menu called');
    this.isMobileMenuOpen = false;
    // Restaurar scroll del body
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  }

  // Método para scroll suave a las secciones con offset
  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    this.closeMobileMenu(); // Cerrar menú móvil si está abierto

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Altura aproximada del navbar
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }
}
