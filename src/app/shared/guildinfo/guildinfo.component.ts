import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-guildinfo',
    templateUrl: './guildinfo.component.html',
})

export class GuildInfoComponent implements OnInit {

    cargando = true;
    gremios: any;

    constructor() { }
    // TODO: Crear servicios

    ngOnInit() { }
}
