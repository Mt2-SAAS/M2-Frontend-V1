import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { IngresarComponent } from './ingresar/ingresar.component';
import { RegistroComponent } from './registro/registro.component';


const AuthRoutes: Routes = [
    { path: 'ingresar', component: IngresarComponent },
    { path: 'registro', component: RegistroComponent },
];

@NgModule({
    imports: [RouterModule.forChild(AuthRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
