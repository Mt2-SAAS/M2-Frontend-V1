import { Component, OnInit } from '@angular/core';

// Services
import { ApplicationService } from 'src/app/services';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-playerinfo',
    templateUrl: './playerinfo.component.html'
})
export class PlayerInfoComponent implements OnInit {

    cargando = true;
    jugadores: any;

    constructor(
        private services: ApplicationService
    ) { }

    ngOnInit() {
        this.getData();
     }

    getData() {
        this.services.get_players()
            .pipe(
                map((res: any) => res.results)
            )
            .subscribe(
                success => {
                    this.jugadores = success.slice(0, 5);
                    this.cargando = false;
                },
                err => {
                    console.error(err);
                }
            );
    }
}
