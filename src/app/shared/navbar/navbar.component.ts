import { Component, OnInit } from '@angular/core';

// Service
import { AuthService } from 'src/app/services';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
    constructor(
        public auth: AuthService
    ) { }

    ngOnInit() { }
}
