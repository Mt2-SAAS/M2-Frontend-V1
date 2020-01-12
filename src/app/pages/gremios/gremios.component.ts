import { Component, OnInit } from '@angular/core';
import { TitleService, ApplicationService } from 'src/app/services';

@Component({
    selector: 'app-gremios',
    templateUrl: './gremios.component.html'
})
export class GremiosComponent implements OnInit {


    cargando = true;
    gremios: any;

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
        this.title.setTitle(this.title.servername + ' - Top Gremios');
        this.getData();
    }

    getData(page: number = 1) {
        this.service.get_guilds(page)
            .subscribe(
                (success: any) => {
                    this.gremios = success.results;
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

    getNexGuild() {
        this.boton = true;
        this.realpag = this.realpag + 1;
        this.pagina = this.pagina + 20;
        this.getData(this.realpag);
    }
    getPrevGuild() {
        this.boton = true;
        this.realpag = this.realpag - 1;
        this.pagina = this.pagina - 20;
        this.getData(this.realpag);
    }
}
