import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services';

@Component({
    selector: 'app-gremios',
    templateUrl: './gremios.component.html'
})
export class GremiosComponent implements OnInit {


    cargando = true;
    gremios: any;


    constructor(
        private title: TitleService
    ) { }

    ngOnInit() {
        this.title.setTitle(this.title.servername + ' - Top Gremios');
    }
}
