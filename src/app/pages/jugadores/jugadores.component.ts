import { Component, OnInit } from '@angular/core';

// Services
import { TitleService, ApplicationService } from 'src/app/services';

@Component({
    selector: 'app-jugadores',
    templateUrl: './jugadores.component.html'
})
export class JugadoresComponent implements OnInit {

    cargando = true;
    jugadores: any;

    // Paginator info
    pagina = 1;
    realpag = 1;
    nextURL: string;
    previustURL: string;
    total: number;
    boton = false;

    constructor(
        private title: TitleService,
        private service: ApplicationService
    ) { }

    ngOnInit() {
        this.title.setTitle(this.title.servername + ' -  Top Jugadores');
        this.getData();
    }

    getData(page: number = 1) {
        this.service.get_players(page)
            .subscribe(
                (success: any) => {
                    this.jugadores = success.results;
                    this.total = success.count;
                    this.nextURL = success.next;
                    this.previustURL = success.previous;
                    this.cargando = false;
                },
                err => {
                    console.error(err);
                }
            );
    }

    getNexPlayer() {
        this.boton = true;
        this.realpag = this.realpag + 1;
        this.pagina = this.pagina + 20;
        this.getData(this.realpag);
    }
    getPrevPlayer() {
        this.boton = true;
        this.realpag = this.realpag - 1;
        this.pagina = this.pagina - 20;
        this.getData(this.realpag);
    }

}
