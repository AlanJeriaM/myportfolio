import { Component } from '@angular/core';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
  logo?: string;
}

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})
export class ExperienciaComponent {

  experiences: Experience[] = [
    {
      company: "Access Mining, Contrato de práctica #1",
      position: "Ingeniero de Software - Frontend",
      period: "Noviembre, 2024 - Febrero, 2025",
      description: [
        "Programación frontend con Angular y TypeScript.",
        "Componentes UI con PrimeNG",
        "Desarrollo con sistema de control de versiones Git - GitHub",
        "Desarrollo bajo metodologías ágiles"
      ],
      technologies: ["Angular", "TypeScript", "PrimeNG"],
      logo: 'assets/logos/accessmining.webp'
    },
    {
      company: "Access Mining, Contrato de práctica #2",
      position: "Ingeniero de Software - Backend",
      period: "Febrero, 2025 - Abril, 2025",
      description: [
        "Diseño de esquemas de base de datos MongoDB.",
        "Integración frontend en Angular con backend en Node.js.",
        "Desarrollo con sistema de control de versiones Git - GitHub",
        "Desarrollo bajo metodologías ágiles"
      ],
      technologies: ["Node.js", "Express", "MongoDB"],
      logo: 'assets/logos/accessmining.webp'
    },
    {
      company: "Access Mining, Jornada Parcial",
      position: "Ingeniero de Software",
      period: "Abril, 2025 - Junio, 2025",
      description: [
        "Programación frontend con Angular y TypeScript.",
        "Componentes UI con PrimeNG",
        "Desarrollo con sistema de control de versiones Git - GitHub",
        "Desarrollo bajo metodologías ágiles",
         "Implementación de nuevas funcionalidades en la plataforma web",
      ],
      technologies: ["Angular","TypeScript", "HTML5", "CSS3", "PrimeNG"],
      logo: 'assets/logos/accessmining.webp'
    }
  ];
}
