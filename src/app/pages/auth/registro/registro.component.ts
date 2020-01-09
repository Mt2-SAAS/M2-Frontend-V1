import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Local Services
import { AuthService } from '../auth.service';

// Global Services
import { TitleService } from 'src/app/services';
import { Router } from '@angular/router';


@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

    form: FormGroup;
    formInputValue = 'Registrar';
    checkbox = false;

    constructor(
        private title: TitleService,
        private router: Router,
        private auth: AuthService
    ) { }

    ngOnInit() {
        this.title.setTitle(this.title.servername + ' - Registro');

        this.form = new FormGroup({
            login: new FormControl('', [
                Validators.required,
                Validators.minLength(4)
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(4)
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

    registro() {
        this.auth.register(this.form.value)
            .subscribe(
                success => {
                    this.router.navigate(['/login']);
                },
                err => {

                }
            );
    }

    truecheck() {
        return !this.checkbox;
    }
}
