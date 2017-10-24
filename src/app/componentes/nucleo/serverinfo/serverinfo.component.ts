import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../servicios/app.service';

@Component({
  selector: 'app-serverinfo',
  templateUrl: './serverinfo.component.html',
  styles: []
})
export class ServerinfoComponent implements OnInit {

  public cargando:boolean = true;
  public estadisticas:any = "";

  constructor(
    private _app: AppService
  ) {
    this._app.getStadisticas()
            .subscribe(data => {
              this.estadisticas = data.data;
              this.cargando = false;
            });
  }

  ngOnInit() {
  }

}
