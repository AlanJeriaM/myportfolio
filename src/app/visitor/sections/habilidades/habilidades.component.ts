import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

interface Technology {
  name: string;
  logo: string;
}

interface SkillCategory {
  name: string;
  icon: string;
  technologies: Technology[];
  isExpanded: boolean;
}

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements AfterViewInit {

  @ViewChild('skillsTitle') skillsTitle!: ElementRef<HTMLHeadingElement>;
  animateTitle = false;

  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: '🖥️',
      isExpanded: true,
      technologies: [
        { name: 'Angular', logo: 'https://angular.io/assets/images/logos/angular/angular.svg' },
        { name: 'Bootstrap', logo: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png' },
        { name: 'Tailwind CSS', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
        { name: 'PrimeNG', logo: 'https://www.primefaces.org/wp-content/uploads/2018/05/primeng-logo.png' }
      ]
    },
    {
      name: 'Backend',
      icon: '⚙️',
      isExpanded: true,
      technologies: [
        { name: 'Node.js', logo: 'https://nodejs.org/static/images/logo.svg' },
        { name: 'Express.js', logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg' },
        { name: 'AWS S3', logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' }
      ]
    },
    {
      name: 'Base de Datos',
      icon: '🗄️',
      isExpanded: true,
      technologies: [
        { name: 'MySQL', logo: 'https://www.vectorlogo.zone/logos/mysql/mysql-official.svg' },
        { name: 'MongoDB', logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' }
      ]
    },
    {
      name: 'Control de Versiones',
      icon: '📚',
      isExpanded: true,
      technologies: [
        { name: 'Git', logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
        { name: 'GitHub', logo: 'https://www.vectorlogo.zone/logos/github/github-icon.svg' }
      ]
    },
    {
      name: 'Herramientas de Software',
      icon: '🛠️',
      isExpanded: true,
      technologies: [
        { name: 'VS Code', logo: 'https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg' },
        { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
        { name: 'WordPress', logo: 'https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg' },
        { name: 'WooCommerce', logo: 'https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce@2x.png' }
      ]
    }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.animateTitle = true;
          observer.unobserve(this.skillsTitle.nativeElement); // 👈 solo una vez
        }
      },
      {
        threshold: 0.3 // 30% visible
      }
    );

    if (this.skillsTitle?.nativeElement) {
      observer.observe(this.skillsTitle.nativeElement);
    }
  }

  toggleCategory(index: number): void {
    this.skillCategories[index].isExpanded = !this.skillCategories[index].isExpanded;
  }
}
