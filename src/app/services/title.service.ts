import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from '../../environments/environment';


@Injectable()
export class TitleService {

  servername = environment.serverName;

  constructor(private title: Title) { }

  setTitle( nuevoTitulo: string) {
    this.title.setTitle(nuevoTitulo);
  }

}
