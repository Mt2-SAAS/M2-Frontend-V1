import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Ingreso } from '../interfaces/ingreso.interface';
import { Data } from '../interfaces/data.interface';
import { Router} from '@angular/router';

@Injectable()
export class AuthService {

  estado:boolean;
  data:Data;

  constructor(
    private _app:AppService,
    private router: Router
  ) {  }

  public login(data:Ingreso): boolean {
    this._app.IngresoApi(data)
        .subscribe(respuesta => {
          if(respuesta.jwt){
            let expired_at = JSON.stringify(Date.parse(respuesta.expired_at)).replace('.','');
            localStorage.setItem('jwt',JSON.stringify(respuesta.jwt));
            localStorage.setItem('expired_at',expired_at);
            this.estado = true;
          } else {
            this.estado = false;
          }
        });
      return this.estado;
  }

  public isAuthenticated():boolean {
    //console.log(expiresAt);
    //console.log(new Date().getTime());
    const expiresAt = JSON.parse(localStorage.getItem('expired_at'));
    return new Date().getTime() < expiresAt;
  }

  public logout(){
    //Borrando localStorage
    localStorage.removeItem('jwt');
    localStorage.removeItem('expired_at');
    //Navegando hacia el home
    this.router.navigate(['/home'])
  }

  public getdata_timmer():Data {
    if( localStorage.getItem('jwt') && localStorage.getItem('expired_at') ){
      this._app.ComprobaIngresoApi(JSON.parse(localStorage.getItem('jwt')))
            .subscribe(respuesta => {
                if(respuesta.status == "expiro"){
                    localStorage.removeItem('jwt');
                    localStorage.removeItem('expired_at');
                    this.router.navigate(['/login']);
                } else {
                  console.log(respuesta);
                  this.data = respuesta
                }
            })
        return this.data;
      }
  }

}
