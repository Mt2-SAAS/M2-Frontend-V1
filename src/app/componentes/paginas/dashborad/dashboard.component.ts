import { Component, OnInit } from '@angular/core';
import { AppService, TitleService, AuthService } from '../../../servicios/servicios.module';
import { Data } from '../../../interfaces/data.interface';
import { Router } from '@angular/router';

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
    private _router:Router,
    public auth:AuthService
  ){
    this._titulo.setTitulo('Metin2 '+this._titulo.servername+' - Panel usuario');
    if(localStorage.getItem('jwt')){
      this._app.ComprobaIngresoApi(JSON.parse(localStorage.getItem('jwt')))
            .subscribe(respuesta => {
                if(respuesta.status == "expiro"){
                    localStorage.removeItem('jwt');
                    this._router.navigate(['/login'])
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
