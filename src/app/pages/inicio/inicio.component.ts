import { Component, OnInit } from '@angular/core';

import { TitleService } from 'src/app/services';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {

    constructor(
        private title: TitleService
    ) { }

    ngOnInit() {
        this.title.setTitle(this.title.servername + ' -  Inicio');
     }
}
