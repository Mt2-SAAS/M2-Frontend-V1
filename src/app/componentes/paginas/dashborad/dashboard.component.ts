import { Component, OnInit } from '@angular/core';
import { AppService, TitleService, AuthService } from '../../../servicios/servicios.module';
import { Data } from '../../../interfaces/data.interface';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
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
    //private _router:Router,
    public auth:AuthService
  ){
    this._titulo.setTitulo('Metin2 '+this._titulo.servername+' - Panel usuario');
    this.data = this.auth.getdata_timmer();
    }

  ngOnInit(){

  }

}
