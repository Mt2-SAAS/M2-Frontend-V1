import { Component, OnInit } from '@angular/core';
import { AppService, TitleService, AuthService } from '../../../servicios/servicios.module';
import { Data } from '../../../interfaces/data.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {

  public data:Data = {
    login:null,
    real_name:null,
    email:null,
    mds:null
  }

  constructor(
    private _app:AppService,
    private _titulo:TitleService,
    private auth:AuthService
  ){
    this._titulo.setTitulo('Metin2 '+this._titulo.servername+' - Panel usuario');
    if(localStorage.getItem('jwt')){
      this._app.ComprobaIngresoApi(JSON.parse(localStorage.getItem('jwt')))
            .subscribe(respuesta => {
                if(respuesta.status == "expiro"){
                    localStorage.removeItem('jwt');
                } else {
                  this.data = respuesta;
                }
                console.log(this.data);
            })
      }
    }

  ngOnInit(){

  }

}
