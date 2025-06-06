// footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

    // Método para scroll suave a las secciones con offset
    scrollToSection(sectionId: string, event: Event): void {
      event.preventDefault();

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
