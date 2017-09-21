import { Component, OnInit } from '@angular/core';
import { AppService } from '../../servicios/app.service';
import { TitleService } from '../../servicios/title.service';

@Component({
  selector: 'app-descarga',
  templateUrl: './descarga.component.html',
})
export class DescargaComponent implements OnInit {

  public cargando:boolean = true;
  public descargas:any = "";

  constructor(
    private _app: AppService,
    private _titulo: TitleService
  ) {
      this._titulo.setTitulo('Metin2 '+this._titulo.servername+' - Descargas');
      this._app.getDescargas()
          .subscribe(data => {
            if(data.status == 'OK' ){
              this.descargas = data.data;
            } else {
              alert("Error en el API");
            }
            this.cargando = false;
          });
   }

  ngOnInit() {
  }

}
