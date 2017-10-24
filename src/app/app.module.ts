import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//importando recaptcha
//import { RecaptchaModule } from 'ng-recaptcha';

//Locale ID
import { LOCALE_ID } from '@angular/core';

//Servicios
import { ServiciosModule } from './servicios/servicios.module';

//Routing
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';

//Importando el core de la aplicacion
import { NucleoModule } from './componentes/nucleo/nucleo.module';

//importando las paginas de la aplicacion
import { PaginasModule } from './componentes/paginas/paginas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    //RecaptchaModule.forRoot(),
    APP_ROUTING,
    NucleoModule,
    ServiciosModule.forRoot(),
    PaginasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
