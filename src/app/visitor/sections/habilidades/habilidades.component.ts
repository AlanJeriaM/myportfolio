// habilidades.component.ts - VERSIÓN SIMPLIFICADA
import { Component } from '@angular/core';

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
  styleUrl: './habilidades.component.scss'
})
export class HabilidadesComponent {

  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: '🖥️',
      isExpanded: false,
      technologies: [
        {
          name: 'Angular',
          logo: 'https://angular.io/assets/images/logos/angular/angular.svg'
        },
        {
          name: 'Bootstrap',
          logo: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png'
        },
        {
          name: 'Tailwind CSS',
          logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
        },
        {
          name: 'PrimeNG',
          logo: 'https://www.primefaces.org/wp-content/uploads/2018/05/primeng-logo.png'
        }
      ]
    },
    {
      name: 'Backend',
      icon: '⚙️',
      isExpanded: false,
      technologies: [
        {
          name: 'Node.js',
          logo: 'https://nodejs.org/static/images/logo.svg'
        },
        {
          name: 'Express.js',
          logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg'
        },
        {
          name: 'AWS S3',
          logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg'
        }
      ]
    },
    {
      name: 'Base de Datos',
      icon: '🗄️',
      isExpanded: false,
      technologies: [
        {
          name: 'MySQL',
          logo: 'https://www.vectorlogo.zone/logos/mysql/mysql-official.svg'
        },
        {
          name: 'MongoDB',
          logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg'
        }
      ]
    },
    {
      name: 'Control de Versiones',
      icon: '📚',
      isExpanded: false,
      technologies: [
        {
          name: 'Git',
          logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
        },
        {
          name: 'GitHub',
          logo: 'https://www.vectorlogo.zone/logos/github/github-icon.svg'
        }
      ]
    },
    {
      name: 'Herramientas de Software',
      icon: '🛠️',
      isExpanded: false,
      technologies: [
        {
          name: 'VS Code',
          logo: 'https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg'
        },
        {
          name: 'Postman',
          logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'
        },
        {
          name: 'WordPress',
          logo: 'https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg'
        },
        {
          name: 'WooCommerce',
          logo: 'https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce@2x.png'
        }
      ]
    }
  ];

  toggleCategory(index: number): void {
    this.skillCategories[index].isExpanded = !this.skillCategories[index].isExpanded;
  }
}
