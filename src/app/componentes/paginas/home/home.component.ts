import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../servicios/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private _titulo:TitleService) {
    this._titulo.setTitulo('Metin2 '+this._titulo.servername);
   }

  ngOnInit() {
  }

}
