// proyectos.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';

interface Project {
  title: string;
  description: string;
  images: string[]; // Cambiado de image a images para múltiples imágenes
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent implements OnInit, OnDestroy {
  projects: Project[] = [
    {
      title: "Luna Coffee & Brunch",
      description: "Plataforma web oficial de Luna Coffee & Brunch, una cafetería ubicada en San Antonio, Chile. El sitio fue desarrollado con un enfoque en diseño moderno, experiencia móvil optimizada y gestión dinámica de contenidos multilingües. Incluye funcionalidades avanzadas como gestión de cupones automáticos, generación y envío de gift cards personalizadas, y un sistema de administración con control de acceso por roles múltiples.",
      images: [
        "assets/proyectos/cafeteria-1.png",
        "assets/proyectos/cafeteria-2.png",
      ],
      technologies: ["Angular", "Node.js", "MongoDB", "Express", "PrimeNG", "CSS", "TypeScript", "AWS S3", "HTML", "GIT"],
    },
    {
      title: "Seguimiento de egresados",
      description: "Aplicación en desarrollo como parte de mi trabajo de título, enfocada en el seguimiento de egresados titulados de la Universidad de Valparaíso. Su objetivo principal es proporcionar información valiosa para la actualización y mejora continua de los planes y programas de estudio, en base a la trayectoria profesional de los egresados. Además, esta plataforma busca facilitar la toma de decisiones académicas a futuro, apoyando tanto a autoridades universitarias en la renovación de su oferta académica, como a estudiantes que están por ingresar a la educación superior.",
      images: [
        "https://via.placeholder.com/400x300/059669/FFFFFF?text=Tasks+1",
        "https://via.placeholder.com/400x300/047857/FFFFFF?text=Tasks+2",
        "https://via.placeholder.com/400x300/065f46/FFFFFF?text=Tasks+3"
      ],
      technologies: ["Angular", "Node.js", "MySql", "PrimeNG", "CSS", "TypeScript", "HTML", "GIT"],
    },
    {
      title: "Portafolio Personal",
      description: "Portafolio personal desarrollado con Angular y Tailwind CSS, diseñado para presentar de forma estructurada y moderna mis proyectos, habilidades y experiencia como desarrollador. La interfaz está optimizada para dispositivos móviles y ofrece una navegación fluida con una estética minimalista y profesional. Incluye secciones como presentación personal, proyectos destacados con enlaces en vivo, experiencia laboral, contacto y enlaces a redes profesionales.",
      images: [
        "https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Weather+1",
        "https://via.placeholder.com/400x300/B91C1C/FFFFFF?text=Weather+2",
        "https://via.placeholder.com/400x300/991B1B/FFFFFF?text=Weather+3"
      ],
      technologies: ["Angular", "Tailwind", "SCSS", "TypeScript", "HTML", "GIT"],
    },
  ];

  // Índices actuales para cada carrusel
  currentImageIndices: number[] = [];
  private carouselIntervals: any[] = [];

 // Colores para las tecnologías

 techColors: { [key: string]: string } = {

  'Angular': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
  'React': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  'Vue.js': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  'Next.js': 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200',
  'React Native': 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200',
  'Node.js': 'bg-lime-100 dark:bg-lime-900 text-lime-800 dark:text-lime-200',
  'Express': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
  'MongoDB': 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200',
  'MySql': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  'TypeScript': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  'Prisma': 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200',
  'WebRTC': 'bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200',
  'HealthKit': 'bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200',
  'OpenWeather API': 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200',
  'PrimeNG': 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200',
  'CSS': 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200',
  'SCSS': 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200',
  'HTML': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
  'GIT': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  'AWS S3': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
  'Tailwind': 'bg-lime-100 dark:bg-lime-900 text-lime-800 dark:text-lime-200',
};

  ngOnInit() {
    // Inicializar índices de carrusel
    this.currentImageIndices = new Array(this.projects.length).fill(0);

    // Iniciar carruseles para cada proyecto
    this.projects.forEach((project, index) => {
      if (project.images.length > 1) {
        const interval = setInterval(() => {
          this.nextImage(index);
        }, 3000);
        this.carouselIntervals.push(interval);
      }
    });
  }

  ngOnDestroy() {
    // Limpiar intervalos
    this.carouselIntervals.forEach(interval => clearInterval(interval));
  }

  nextImage(projectIndex: number) {
    const project = this.projects[projectIndex];
    this.currentImageIndices[projectIndex] =
      (this.currentImageIndices[projectIndex] + 1) % project.images.length;
  }

  previousImage(projectIndex: number) {
    const project = this.projects[projectIndex];
    this.currentImageIndices[projectIndex] =
      this.currentImageIndices[projectIndex] === 0
        ? project.images.length - 1
        : this.currentImageIndices[projectIndex] - 1;
  }

  getTechColor(tech: string): string {
    return this.techColors[tech] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
  }

}
