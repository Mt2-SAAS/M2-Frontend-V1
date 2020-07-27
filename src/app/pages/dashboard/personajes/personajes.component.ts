import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
    selector: 'app-personajes',
    templateUrl: './personajes.component.html',
    // styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

    ownUsers: any[]

    constructor(
        private servicio: DashboardService
    ) { }

    ngOnInit(): void { 
        this.getData();
    }

    getData() {
        this.servicio.get_current_players()
            .subscribe( (ownUsers: any[]) => {
                this.ownUsers = ownUsers;
            });
    }
}
