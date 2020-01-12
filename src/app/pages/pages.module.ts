import { NgModule } from '@angular/core';

// Components
import { DescargasComponent } from './descargas/descargas.component';
import { DonacionesComponent } from './donaciones/donaciones.component';
import { ExitoComponent } from './exito/exito.component';
import { GremiosComponent } from './gremios/gremios.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { InicioComponent } from './inicio/inicio.component';
import { TerminosComponent } from './terminos/terminos.component';

// Local Modules
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routing';


@NgModule({
    declarations: [
        DescargasComponent,
        DonacionesComponent,
        ExitoComponent,
        GremiosComponent,
        JugadoresComponent,
        InicioComponent,
        TerminosComponent
    ],
    imports: [
        SharedModule,
        PagesRoutingModule
    ],
    exports: [],
    providers: [],
})
export class PagesModule {}
