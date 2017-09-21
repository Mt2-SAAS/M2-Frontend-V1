import { RouterModule, Routes } from '@angular/router';

//Importando modulos usados en las rutas
import { HomeComponent } from './componentes/home/home.component';
import { DescargaComponent } from './componentes/descarga/descarga.component';
//import { RegistroComponent } from './componentes/registro/registro.component';
import { TopjugadoresComponent } from './componentes/topjugadores/topjugadores.component';
import { LoginComponent } from './componentes/login/login.component';
import { TopgremiosComponent } from './componentes/topgremios/topgremios.component';
//import { DonacionesComponent } from './componentes/donaciones/donaciones.component';
import { ExitoComponent } from './componentes/exito/exito.component';
import { RegistroDataComponent } from './componentes/registro/registro-data.component';
import { TerminosComponent } from './componentes/terminos/terminos.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  //{ path: 'registro', component: RegistroComponent },
  { path: 'registro', component: RegistroDataComponent },
  { path: 'topjugadores', component: TopjugadoresComponent },
  { path: 'topgremios', component: TopgremiosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'descarga', component: DescargaComponent },
  //{ path: 'donaciones', component: DonacionesComponent },
  { path: 'registro_exitoso', component: ExitoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
