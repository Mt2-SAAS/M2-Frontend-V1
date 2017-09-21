import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../servicios/app.service';

@Component({
  selector: 'app-playerinfo',
  templateUrl: './playerinfo.component.html',
})
export class PlayerinfoComponent implements OnInit {

  public cargando:boolean = true;
  public jugadores:any = "";

  constructor(
    private _app: AppService
  ) {
    this._app.getPlayers()
          .subscribe(respuesta => {
            this.jugadores = respuesta.data
            this.cargando = false;
          })
  }

  ngOnInit() {
  }

}
