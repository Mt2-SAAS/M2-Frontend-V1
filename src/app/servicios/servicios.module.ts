import { NgModule } from '@angular/core';
import { AppService } from './app.service';
import { TitleService } from './title.service';

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
        TitleService
      ]
    }
  }
}

export {
  AppService,
  TitleService
}
