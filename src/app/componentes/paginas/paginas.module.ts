import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DescargaComponent } from './descarga/descarga.component';
import { DonacionesComponent } from './donaciones/donaciones.component';
import { ExitoComponent } from './exito/exito.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroDataComponent } from './registro/registro-data.component';
import { TerminosComponent } from './terminos/terminos.component';
import { TopgremiosComponent } from './topgremios/topgremios.component';
import { TopjugadoresComponent } from './topjugadores/topjugadores.component';

@NgModule({
  imports:[
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DescargaComponent,
    DonacionesComponent,
    ExitoComponent,
    HomeComponent,
    LoginComponent,
    RegistroDataComponent,
    TerminosComponent,
    TopgremiosComponent,
    TopjugadoresComponent
  ],
  exports:[
    DescargaComponent,
    DonacionesComponent,
    ExitoComponent,
    HomeComponent,
    LoginComponent,
    RegistroDataComponent,
    TerminosComponent,
    TopgremiosComponent,
    TopjugadoresComponent
  ]
})

export class PaginasModule{}
