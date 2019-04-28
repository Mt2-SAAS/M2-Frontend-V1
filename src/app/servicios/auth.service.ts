import { reject } from 'q';
import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Ingreso } from '../interfaces/ingreso.interface';
import { Data } from '../interfaces/data.interface';
import { Router} from '@angular/router';

@Injectable()
export class AuthService {

  estado: boolean;
  data: Data;

  constructor(
    private _app: AppService,
    private router: Router
  ) {  }

  public login(data: Ingreso): any {
    const promise = new Promise (( resolve , reject) => {
      this._app.IngresoApi(data)
          .then(respuesta => {
            if (respuesta.jwt) {
              const expired_at = JSON.stringify(Date.parse(respuesta.expired_at)).replace('.', '');
              localStorage.setItem('jwt', JSON.stringify(respuesta.jwt));
              localStorage.setItem('expired_at', expired_at);
              this.estado = true;
              resolve();
            } else {
              this.estado = false;
              reject();
            }
          });
    });
    return promise;
  }

  public isAuthenticated(): boolean {
    // console.log(expiresAt);
    // console.log(new Date().getTime());
    const expiresAt = JSON.parse(localStorage.getItem('expired_at'));
    return new Date().getTime() < expiresAt;
  }

  public logout() {
    // Borrando localStorage
    localStorage.removeItem('jwt');
    localStorage.removeItem('expired_at');
    localStorage.removeItem('identidad');
    // Navegando hacia el home
    this.router.navigate(['/home'])
  }

  public getdata_timmer() {

    const promise = new Promise((resolve, reject) => {

      if ( localStorage.getItem('jwt') && localStorage.getItem('expired_at') ) {
        if (!this.data) {
          this._app.ComprobaIngresoApi(JSON.parse(localStorage.getItem('jwt')))
              .subscribe(respuesta => {
                  if (respuesta.status === 'expiro') {
                      localStorage.removeItem('jwt');
                      localStorage.removeItem('expired_at');
                      localStorage.removeItem('identidad');
                      this.router.navigate(['/login']);
                      reject();
                  } else {
                    // console.log(respuesta);
                    this.data = respuesta
                    console.log('promesa resulta');
                    resolve();
                  }
              });
        }
      }

    });

    return promise;
  }

  public getStorage(): Data {
    this.data = JSON.parse(localStorage.getItem('identidad'))
    return this.data;
  }

}
