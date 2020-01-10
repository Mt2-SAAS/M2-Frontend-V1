import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services';

@Component({
    selector: 'app-descargas',
    templateUrl: './descargas.component.html',
})
export class DescargasComponent implements OnInit {

    cargando = true;
    descargas: any;

    constructor(
        private title: TitleService
    ) { }

    ngOnInit() {
        this.title.setTitle(this.title.servername + ' -  Descargas');
     }
}
