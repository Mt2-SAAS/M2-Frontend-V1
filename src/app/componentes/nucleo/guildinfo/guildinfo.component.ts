import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../servicios/app.service';

@Component({
  selector: 'app-guildinfo',
  templateUrl: './guildinfo.component.html',
})
export class GuildinfoComponent implements OnInit {

  public cargando:boolean = true;
  public gremios:any = "";

  constructor(
    private _app: AppService
  ) {
    this._app.getGremios()
      .subscribe(respuesta => {
        this.gremios = respuesta.data;
        this.cargando = false;
      });
   }

  ngOnInit() {
  }

}
