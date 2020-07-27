import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services';

@Component({
    selector: 'app-terminos',
    templateUrl: './terminos.component.html'
})
export class TerminosComponent implements OnInit {
    constructor(
        private title: TitleService
    ) { }

    ngOnInit() {
        this.title.setTitle(this.title.servername + ' -  Terminos y Condiciones');
    }
}
