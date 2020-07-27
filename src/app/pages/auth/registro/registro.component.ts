import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Local Services
import { AuthService } from '../auth.service';

// Global Services
import { TitleService } from 'src/app/services';

// RXJS
import { Observable } from 'rxjs';


@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

    form: FormGroup;
    formInputValue = 'Registrar';
    checkbox = false;
    username: boolean;


    constructor(
        private title: TitleService,
        private router: Router,
        private auth: AuthService
    ) {
        this.form = new FormGroup({
            login: new FormControl('', [
                Validators.required,
                Validators.minLength(4)
            ], [this.verifyUser.bind(this)]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(6)
            ]),
            real_name: new FormControl('', [
                Validators.required,
                Validators.minLength(4)
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
            ]),
            social_id: new FormControl('', [
                Validators.required,
                Validators.pattern('.{7,7}')
            ])
        });
     }

    ngOnInit() {
        this.title.setTitle(this.title.servername + ' - Registro');
    }

    registro() {
        this.auth.register(this.form.value)
            .subscribe(
                () => {
                    this.router.navigate(['/exito']);
                },
                err => {
                    console.error(err);
                }
            );
    }

    truecheck() {
        this.checkbox = !this.checkbox;
        return this.checkbox;
    }

    checkUser(usuario: string) {
        this.auth.verify_user( usuario ).subscribe(
          (response: any) => {        
            if (response.status) {
              this.username = true;
            } else {
              this.username = false;
            }
          },
          // Manejando el error
          () => {
          this.username = false;
        });
    }

    verifyUser(control: FormControl): Promise<any> | Observable<any> {
        const usuario = control.value.toLowerCase();
        const promesa = new Promise(
          (resolve) => {
            this.checkUser(usuario);
            setTimeout( () => {
              if (this.username) {
                resolve({existe: true});
              } else {
                resolve( null );
              }
            }, 2000);
          }
        );
        return promesa;
    }
}
