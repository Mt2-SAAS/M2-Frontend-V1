import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services';

@Component({
    selector: 'app-jugadores',
    templateUrl: './jugadores.component.html'
})
export class JugadoresComponent implements OnInit {

    cargando = true;
    jugadores: any;


    constructor(
        private title: TitleService
    ) { }

    ngOnInit() {
        this.title.setTitle(this.title.servername + ' -  Top Jugadores');
    }
}
