import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SobreMiComponent } from './sections/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './sections/experiencia/experiencia.component';
import { HabilidadesComponent } from './sections/habilidades/habilidades.component';
import { ProyectosComponent } from './sections/proyectos/proyectos.component';
import { ContactoComponent } from './sections/contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SobreMiComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    ReactiveFormsModule,

  ],
  exports: [
    NavbarComponent,
    SobreMiComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    ScrollToTopComponent
  ]
})
export class VisitorModule { }
