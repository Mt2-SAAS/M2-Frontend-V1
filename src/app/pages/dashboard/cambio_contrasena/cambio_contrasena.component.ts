import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Local Services
import { DashboardService } from '../dashboard.service';

@Component({
    selector: 'cambio-contrasena',
    templateUrl: './cambio_contrasena.component.html'
})
export class CambioComponent {

  form: FormGroup
  message: any;

  constructor(
    private service: DashboardService,
  ) {
    this.form = new FormGroup({
      current_password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      new_password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      new_password_again: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  ngOnInit() { }

  send() {
    this.service.change_password(this.form.value).subscribe(
    () => {
      // Show Message
      this.show_message('Contraseña cambiada con exito');
      // Clean form
      this.form.reset();
    },
    () => {
      this.show_message('Contraseña incorrecta');
    })
  }

  show_message(messge: string) {
    this.message = messge
    setTimeout(() => {
      this.message = null
    }, 3000)

  }

}