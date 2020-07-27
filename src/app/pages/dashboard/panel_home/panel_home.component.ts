import { Component, OnInit } from '@angular/core';

// Interfaces
import { UserLogin } from '../dashboard.interfaces';

// Services
import { DashboardService } from '../dashboard.service';
import { AuthService } from 'src/app/services';

@Component({
    selector: 'panel_home',
    templateUrl: './panel_home.component.html',
    // styleUrls: ['./panel_home.component.css']
})
export class PanelHomeComponent implements OnInit  {

    user: UserLogin = {
        login: '',
        email: '',
        real_name: '',
        status: '',
        coins: 0,
        create_time: ''
    }

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
                    this.user = success;
                },
                err  => {
                    console.error(err);
                }
            );
    }


}
