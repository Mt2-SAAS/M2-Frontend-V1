import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//importando recaptcha
//import { RecaptchaModule } from 'ng-recaptcha';

//Locale ID
import { LOCALE_ID } from '@angular/core';

//Servicios
import { AppService } from './servicios/app.service';
import { TitleService } from './servicios/title.service';

//Routing
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { ServerinfoComponent } from './componentes/shared/serverinfo/serverinfo.component';
import { GuildinfoComponent } from './componentes/shared/guildinfo/guildinfo.component';
import { PlayerinfoComponent } from './componentes/shared/playerinfo/playerinfo.component';
import { DescargaComponent } from './componentes/descarga/descarga.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TopjugadoresComponent } from './componentes/topjugadores/topjugadores.component';
import { LoginComponent } from './componentes/login/login.component';
import { TopgremiosComponent } from './componentes/topgremios/topgremios.component';
import { DonacionesComponent } from './componentes/donaciones/donaciones.component';
import { ExitoComponent } from './componentes/exito/exito.component';
import { RegistroDataComponent } from './componentes/registro/registro-data.component';
import { TerminosComponent } from './componentes/terminos/terminos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServerinfoComponent,
    GuildinfoComponent,
    PlayerinfoComponent,
    DescargaComponent,
    HomeComponent,
    RegistroComponent,
    RegistroDataComponent,
    TopjugadoresComponent,
    LoginComponent,
    TopgremiosComponent,
    DonacionesComponent,
    ExitoComponent,
    TerminosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    //RecaptchaModule.forRoot(),
    APP_ROUTING
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es'},
    AppService,
    TitleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
