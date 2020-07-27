import { Component, OnInit } from '@angular/core';

// Services
import { ApplicationService } from '../../services/http/application.service';

@Component({
    selector: 'app-serverinfo',
    templateUrl: './serverinfo.component.html'
})
export class ServerInfoComponent implements OnInit {

    cargando = true;
    estadisticas: any;

    constructor(
        private servicio: ApplicationService
    ) { }

    ngOnInit() {
        this.get_stats();
     }

    get_stats() {
        this.servicio.get_stats()
            .subscribe(stats => {
                this.estadisticas = stats;
                this.cargando = false;
            })
    }
}
