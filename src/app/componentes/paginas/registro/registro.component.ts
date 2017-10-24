import { Component } from '@angular/core';
import { TitleService } from '../../../servicios/title.service';
//import { FormGroup, FormControl, Validator} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Cuenta } from '../../../interfaces/cuenta.interface';
import { AppService } from '../../../servicios/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
    `]
})
export class RegistroComponent {

  public titulo = "Registar";
  public cuenta:Cuenta = {
    login:null,
    password:null,
    real_name:null,
    email:null,
    social_id: null
  }

  constructor(
    private _titulo:TitleService,
    private _app: AppService,
    private _router: Router
  ) {
    this._titulo.setTitulo('Metin2 '+this._titulo.servername+' - Registro');
   }


  registrar(){
    this._app.RegistroCuenta(this.cuenta)
        .subscribe(data => {
          this.cuenta = data

          if(data.password == 'privado'){
            this._router.navigate(['/registro_exitoso']);
          }

        });

  }

}
