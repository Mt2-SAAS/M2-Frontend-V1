import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../servicios/title.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private _titulo:TitleService) {
  this._titulo.setTitulo('Metin2 '+this._titulo.servername+' - Login'); 
  }

  ngOnInit() {
  }

}
