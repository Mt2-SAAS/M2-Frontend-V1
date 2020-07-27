import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-guildinfo',
    templateUrl: './guildinfo.component.html',
})

export class GuildInfoComponent implements OnInit {

    cargando = true;
    gremios: any;

    constructor(
        private services: ApplicationService
    ) { }

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.services.get_guilds()
            .pipe(
                map((res: any) => res.results)
            )
            .subscribe(
                success => {
                    this.gremios = success.slice(0, 5);
                    this.cargando = false;
                },
                err => {
                    console.error(err);
                }
            );
    }
}
