import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Local Services
import { AuthService } from '../auth.service';

// Global Services
import { TitleService } from 'src/app/services';


@Component({
    selector: 'app-ingresar',
    templateUrl: './ingresar.component.html'
})
export class IngresarComponent implements OnInit {

    mensaje: boolean;

    form: FormGroup;
    formInputValue = 'Ingresar';

    constructor(
        private title: TitleService,
        private router: Router,
        private auth: AuthService
    ) { }

    ngOnInit() {
        this.title.setTitle(this.title.servername + ' - Ingresar');

        this.form = new FormGroup({
            login: new FormControl('', [
                Validators.required,
                Validators.minLength(4)
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(4)
            ])
        });

     }

     ingresar() {
        this.auth.auth(this.form.value)
            .subscribe(
                success => {
                    this.router.navigate(['/panel_usuario']);
                },
                err => {
                    this.mensaje = true;
                    setTimeout(() => {
                        this.mensaje = false;
                    }, 5000);
                }
            );
     }
}
