import { NgModule } from '@angular/core';
import { AppService } from './app.service';
import { TitleService } from './title.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  imports:[],
  exports:[],
  declarations:[],
  providers:[]
})

export class ServiciosModule {
  static forRoot(){
    return {
      ngModule: ServiciosModule,
      providers:[
        AppService,
        TitleService,
        AuthService,
        AuthGuardService
      ]
    }
  }
}

export {
  AppService,
  TitleService,
  AuthService,
  AuthGuardService
}
