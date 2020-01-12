import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-serverinfo',
    templateUrl: './serverinfo.component.html'
})
export class ServerInfoComponent implements OnInit {

    cargando = true;
    estadisticas: any;

    constructor() { }

    ngOnInit() { }
}
