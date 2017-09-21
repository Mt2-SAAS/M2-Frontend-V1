import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TitleService {

  public servername:string = "The Last";

  constructor(private titulo: Title) { }

  public setTitulo( nuevoTitulo:string){
    this.titulo.setTitle(nuevoTitulo);
  }

}
