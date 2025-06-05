import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.scss'
})
export class HabilidadesComponent {

  skills: Skill[] = [
    { name: "Angular", level: 90, category: "Frontend" },
    { name: "React", level: 85, category: "Frontend" },
    { name: "TypeScript", level: 88, category: "Frontend" },
    { name: "JavaScript", level: 92, category: "Frontend" },
    { name: "HTML5/CSS3", level: 95, category: "Frontend" },
    { name: "Tailwind CSS", level: 85, category: "Frontend" },

    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Express.js", level: 78, category: "Backend" },
    { name: "MongoDB", level: 75, category: "Backend" },
    { name: "PostgreSQL", level: 72, category: "Backend" },
    { name: "REST APIs", level: 85, category: "Backend" },

    { name: "Git", level: 88, category: "Herramientas" },
    { name: "Docker", level: 70, category: "Herramientas" },
    { name: "AWS", level: 65, category: "Herramientas" },
    { name: "Jest", level: 75, category: "Herramientas" },
    { name: "Figma", level: 80, category: "Herramientas" }
  ];

  skillCategories = ["Frontend", "Backend", "Herramientas"];

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

}
