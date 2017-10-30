import { NgModule } from '@angular/core';
import { AppService } from './app.service';
import { TitleService } from './title.service';
import { AuthService } from './auth.service';

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
        AuthService
      ]
    }
  }
}

export {
  AppService,
  TitleService,
  AuthService
}
