import { Component, OnInit } from '@angular/core';

// Local Services
import { DashboardService } from '../dashboard.service';

// Global Services
import { AuthService } from 'src/app/services';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    usuario: any;

    constructor(
        private service: DashboardService,
        public auth: AuthService
    ) { }

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.service.get_user()
            .subscribe(
                success => {
                    console.log(success);
                    this.usuario = success;
                },
                err  => {
                    console.error(err);
                }
            );
    }
}
