import { Component } from '@angular/core';
import { TitleService } from '../../../servicios/title.service';
import { AppService } from '../../../servicios/app.service';

@Component({
  selector: 'app-topgremios',
  templateUrl: './topgremios.component.html',
})
export class TopgremiosComponent {
  public pagina:number = 1;
  public realpag:number = 1;
  public nextURL:string = "";
  public previustURL:string = "";
  public total:number;
  public cargando:boolean = true;
  public boton:boolean = false;
  public gremios:any[] = [];

  constructor(
    private _titulo:TitleService,
    private _app: AppService
  ) {
    this._titulo.setTitulo('Metin2 '+this._titulo.servername+' - Ranking gremios');
    this._app.getGuidList()
        .subscribe(resultado => {
          this.gremios = resultado.results;
          this.nextURL = resultado.next;
          this.total = resultado.count;
          this.cargando = false;
          this.previustURL = resultado.previous;
          //console.log(this.gremios);
        })


  }

  getNexPlayer(url:string){
    this.boton = true;
    this._app.getAnyURL(url)
      .subscribe(respuesta => {
        this.gremios = respuesta.results;
        this.nextURL = respuesta.next;
        this.previustURL = respuesta.previous;

        if (typeof this.gremios == 'object'){

          this.pagina = this.pagina - 20;
          this.realpag = this.realpag - 1;
          this.boton = false;
          //this.cargando = false;
        }
      });


  }

  getPrevPlayer(url:string){
    this.boton = true;
    this._app.getAnyURL(url)
      .subscribe(respuesta => {
        this.gremios = respuesta.results;
        this.nextURL = respuesta.next;
        this.previustURL = respuesta.previous;

        if (typeof this.gremios == 'object'){

          this.pagina = this.pagina + 20;
          this.realpag = this.realpag + 1;
          this.boton = false;
          //this.cargando = false;
        }
      });


  }

}
