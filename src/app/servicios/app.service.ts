import { Injectable } from '@angular/core';

//importando interface requerida
import { Cuenta } from '../interfaces/cuenta.interface';

//Importando modulos Http y Headers para trabajar correctamente.
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AppService {

  //public AppURL:string = "http://172.16.5.15:8071/api";
  public AppURL:string = "https://api.l4st.xyz/api";

  constructor(
    private _http:Http
  ) { }

  getStadisticas(){
    //Creando la URL para consumir el servicio
    let url = `${this.AppURL}/stats/?format=json`;

    return this._http.get(url)
              .map(respuesta => respuesta.json());

  }

  getPlayers(){
    let url = `${this.AppURL}/top5/?format=json`;

    return this._http.get(url)
              .map(respuesta => respuesta.json());
  }

  getGremios(){
    let url = `${this.AppURL}/top_g5/?format=json`;

    return this._http.get(url)
              .map(respuesta => respuesta.json());
  }

  getDescargas(){
    let url = `${this.AppURL}/descargas/?format=json`;

    return this._http.get(url)
              .map(respuesta => respuesta.json());
  }

  getTopList(page:string = null){
    let url = `${this.AppURL}/top/`;

    return this._http.get(url)
          .map(respuesta => respuesta.json());
  }

  getGuidList(page:string = null){
    let url = `${this.AppURL}/top_g/`;

    return this._http.get(url)
          .map(respuesta => respuesta.json());
  }

  getAnyURL(url:string){
    return this._http.get(url)
          .map(respuesta => respuesta.json());
  }

  RegistroCuenta(data:Cuenta){
    let url = `${this.AppURL}/registro/`;
    let body = JSON.stringify( data );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this._http.post(url, body, {headers:headers})
           .map(respuesta => {
             return respuesta.json();
           })
  }

  ComprobarUser(usuario:string){
    let url = `${this.AppURL}/users/${usuario}`;

    return this._http.get(url)
            .map(respuesta => {
              return respuesta.json();
            })

  }

}
