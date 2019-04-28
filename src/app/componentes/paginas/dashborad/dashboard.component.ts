import { Component, OnInit } from '@angular/core';
import { AppService, TitleService, AuthService } from '../../../servicios/servicios.module';
import { Data } from '../../../interfaces/data.interface';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  constructor(
    private _app: AppService,
    private _titulo: TitleService,
    public auth: AuthService
  ) {
      this._titulo.setTitulo('Metin2 ' + this._titulo.servername + ' - Panel usuario');
      this.auth.getdata_timmer()
        .then(() => {
          console.log('se resolvio la promesa');
        })
    }

  ngOnInit() {

  }

}
