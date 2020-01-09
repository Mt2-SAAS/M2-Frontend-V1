import { RouterModule, Routes } from '@angular/router';

// Importando modulos usados en las rutas
import { HomeComponent } from './componentes/paginas/home/home.component';
import { DescargaComponent } from './componentes/paginas/descarga/descarga.component';
// import { RegistroComponent } from './componentes/registro/registro.component';
import { TopjugadoresComponent } from './componentes/paginas/topjugadores/topjugadores.component';
import { LoginComponent } from './componentes/paginas/login/login.component';
import { TopgremiosComponent } from './componentes/paginas/topgremios/topgremios.component';
// import { DonacionesComponent } from './componentes/donaciones/donaciones.component';
import { ExitoComponent } from './componentes/paginas/exito/exito.component';
import { RegistroDataComponent } from './componentes/paginas/registro/registro-data.component';
import { TerminosComponent } from './componentes/paginas/terminos/terminos.component';
import { DashboardComponent } from './componentes/paginas/dashborad/dashboard.component';

import { AuthGuardService } from './servicios/servicios.module';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'registro', component: RegistroComponent },
  { path: 'registro', component: RegistroDataComponent },
  { path: 'topjugadores', component: TopjugadoresComponent },
  { path: 'topgremios', component: TopgremiosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'descarga', component: DescargaComponent },
  {
    path: 'panel_usuario',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  // { path: 'donaciones', component: DonacionesComponent },
  { path: 'registro_exitoso', component: ExitoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
