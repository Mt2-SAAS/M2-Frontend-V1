import { NgModule } from '@angular/core';

// Routing
import { DashboardRoutingModule } from './dashboard.routing';

// Shared Module
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { CambioComponent } from './cambio_contrasena/cambio_contrasena.component';
import { PanelHomeComponent } from './panel_home/panel_home.component';
import { PersonajesComponent } from './personajes/personajes.component';

// Local Services
import { DashboardService } from './dashboard.service';

@NgModule({
    declarations: [
        DashboardComponent,
        CambioComponent,
        PanelHomeComponent,
        PersonajesComponent
    ],
    imports: [
        SharedModule,
        DashboardRoutingModule,
    ],
    exports: [],
    providers: [
        DashboardService
    ],
})
export class DashboardModule {}
