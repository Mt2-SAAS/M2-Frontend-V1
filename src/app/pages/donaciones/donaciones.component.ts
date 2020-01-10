import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services';

@Component({
    selector: 'app-donaciones',
    templateUrl: './donaciones.component.html',
})
export class DonacionesComponent implements OnInit {
    constructor(
        private title: TitleService
    ) { }

    ngOnInit() {
        this.title.setTitle(this.title.servername + ' -  Donaciones');
     }
}
