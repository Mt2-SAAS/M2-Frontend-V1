import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { CambioComponent } from './cambio_contrasena/cambio_contrasena.component'
import { PanelHomeComponent } from './panel_home/panel_home.component';
import { PersonajesComponent } from './personajes/personajes.component';


const DashboardRoutes: Routes = [
    { 
        path: '', 
        component: DashboardComponent,
        children: [
            {path: 'home', component: PanelHomeComponent},
            {path: 'cambio_contrasena', component: CambioComponent},
            {path: 'personajes', component: PersonajesComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(DashboardRoutes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
