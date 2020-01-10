import { NgModule } from '@angular/core';

// Routing
import { AuthRoutingModule } from './auth.routing';

// Components
import { IngresarComponent } from './ingresar/ingresar.component';
import { RegistroComponent } from './registro/registro.component';

// Local Services
import { AuthService } from './auth.service';

// Shared Module
import { SharedModule } from '../../shared/shared.module';


@NgModule({
    declarations: [
        IngresarComponent,
        RegistroComponent
    ],
    imports: [
        SharedModule,
        AuthRoutingModule
    ],
    exports: [

    ],
    providers: [
        AuthService
    ],
})
export class AuthModule {}
