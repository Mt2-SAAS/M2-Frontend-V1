//Importando componentes de Angular
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

//Importando Interface de cuenta
import { Cuenta } from '../../../interfaces/cuenta.interface';

//Importando servicios
import { AppService } from '../../../servicios/app.service';
import { TitleService } from '../../../servicios/title.service';

@Component({
  selector: 'app-registrodata',
  templateUrl: './registro-data.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
    `]
})

export class RegistroDataComponent {

  public checkbox:boolean = false;
  public titulo:string = 'Guardar';
  public formulario:FormGroup;
  public data:string = "";
  public cuenta:Cuenta = {
    login:null,
    password:null,
    real_name:null,
    email:null,
    social_id: 1234567
  }

  constructor(
    private _titulo:TitleService,
    private _app: AppService,
    private _router: Router
  ){
    this._titulo.setTitulo('Metin2 '+this._titulo.servername+' - Registro');

    this.formulario = new FormGroup({
      'login': new FormControl('',[
                                      Validators.required,
                                      Validators.minLength(4)
                                    ], [this.comprobarUsuario.bind(this)] ),
      'password': new FormControl('',[
                                      Validators.required,
                                      Validators.minLength(4)
                                    ]),
      'real_name': new FormControl('',[
                                      Validators.required,
                                      Validators.minLength(4)
                                    ]),
      'email': new FormControl('',[
                                    Validators.required,
                                    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                  ]),
      'social_id': new FormControl('',[
                                    Validators.required,
                                    Validators.pattern(".{7,7}")
                                  ])
    });

    this.formulario.reset(this.cuenta);
  }

  public registro(){
    this._app.RegistroCuenta(this.formulario.value)
        .subscribe(data => {
          this.cuenta = data

          if(data.password == 'privado'){
            this._router.navigate(['/registro_exitoso']);
          }

        });
  }

  public comprobarUsuario(control: FormControl): Promise<any> | Observable<any>{

    let usuario = control.value.toLowerCase()
    let promesa = new Promise(
      (resolve, reject)=>{

        this.Servicio(usuario)

        setTimeout( ()=> {
          if(usuario === this.data ){
            resolve( {existe:true} )
          } else {
            resolve( null )
          }
        }, 3000)

      }
    )

    return promesa;

  }

  public Servicio(usuario:string){
    this._app.ComprobarUser(usuario)
          .subscribe(data => {
            if(data.data.login){
              this.data = data.data.login;
            }
          });
  }

  public truecheck(){
    if(this.checkbox){
      this.checkbox = false
    } else {
      this.checkbox = true
    }
  }

}
