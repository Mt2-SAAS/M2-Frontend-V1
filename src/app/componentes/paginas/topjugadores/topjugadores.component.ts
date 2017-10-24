import { Component } from '@angular/core';
import { TitleService } from '../../../servicios/title.service';
import { AppService } from '../../../servicios/app.service';

@Component({
  selector: 'app-topjugadores',
  templateUrl: './topjugadores.component.html',
})
export class TopjugadoresComponent {

  public pagina:number = 1;
  public realpag:number = 1;
  public nextURL:string = "";
  public previustURL:string = "";
  public total:number;
  public cargando:boolean = true;
  public boton:boolean = false;
  public jugadores:any[] = [];

  constructor(
    private _titulo:TitleService,
    private _app: AppService
    ) {
    this._titulo.setTitulo('Metin2 '+this._titulo.servername+' - Ranking jugadores');
    this._app.getTopList()
        .subscribe(resultado => {
          this.jugadores = resultado.results;
          this.nextURL = resultado.next;
          this.total = resultado.count;
          this.cargando = false;
          this.previustURL = resultado.previous

          /*console.log(this.jugadores);
          console.log(this.nextURL);
          console.log(this.previustURL);*/
        });
  }

  getNexPlayer(url:string){
    this.boton = true;
    this._app.getAnyURL(url)
      .subscribe(respuesta => {
        this.jugadores = respuesta.results;
        this.nextURL = respuesta.next;
        this.previustURL = respuesta.previous;

        if (typeof this.jugadores == 'object'){

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
        this.jugadores = respuesta.results;
        this.nextURL = respuesta.next;
        this.previustURL = respuesta.previous;

        if (typeof this.jugadores == 'object'){

          this.pagina = this.pagina + 20;
          this.realpag = this.realpag + 1;
          this.boton = false;
          //this.cargando = false;

        }
      });

      //this.cargando = false;
  }

}
