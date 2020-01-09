import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-playerinfo',
    templateUrl: './playerinfo.component.html'
})
export class PlayerInfoComponent implements OnInit {

    cargando = true;
    jugadores: any;

    constructor() { }

    ngOnInit() { }
}
