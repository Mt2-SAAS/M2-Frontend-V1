import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Ingreso } from '../interfaces/ingreso.interface';
import { Router} from '@angular/router';

@Injectable()
export class AuthService {

  estado:boolean;

  constructor(
    private _app:AppService,
    private router: Router
  ) {  }

  public login(data:Ingreso): boolean {
    this._app.IngresoApi(data)
        .subscribe(respuesta => {
          if(respuesta.jwt){
            localStorage.setItem('jwt',JSON.stringify(respuesta.jwt));
            //localStorage.setItem('expired_at',JSON.stringify(respuesta.expired_at))
            let expired_at = JSON.stringify(Date.parse(respuesta.expired_at));
            let s = expired_at + '';
            let d:number = 0;
            s = s.replace('.','');
            d = parseInt(s);
            localStorage.setItem('expired_at',s)
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
    console.log("Primero este tiene el tiempo");
    console.log(expiresAt);
    console.log("este tiene el tiempo ahora");
    console.log(new Date().getTime());
    return new Date().getTime() < expiresAt;
  }

  public logout(){
    //Borrando localStorage
    localStorage.removeItem('jwt');
    localStorage.removeItem('expired_at');
    //Navegando hacia el home
    this.router.navigate(['/'])
  }

}
