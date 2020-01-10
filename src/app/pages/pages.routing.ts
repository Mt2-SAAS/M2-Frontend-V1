import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import {  } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { GremiosComponent } from './gremios/gremios.component';
import { TerminosComponent } from './terminos/terminos.component';
import { DescargasComponent } from './descargas/descargas.component';
import { ExitoComponent } from './exito/exito.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    { path: 'inicio', component: InicioComponent },
    { path: 'jugadores', component: JugadoresComponent },
    { path: 'gremios', component: GremiosComponent },
    { path: 'terminos', component: TerminosComponent },
    { path: 'descargas', component: DescargasComponent },
    { path: 'exito', component: ExitoComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule {}
