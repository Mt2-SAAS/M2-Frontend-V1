import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServerinfoComponent } from './serverinfo/serverinfo.component';
import { PlayerinfoComponent } from './playerinfo/playerinfo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GuildinfoComponent } from './guildinfo/guildinfo.component';

@NgModule({
  imports:[
    CommonModule,
    RouterModule
  ],
  declarations:[
    ServerinfoComponent,
    PlayerinfoComponent,
    NavbarComponent,
    GuildinfoComponent
  ],
  exports:[
    ServerinfoComponent,
    PlayerinfoComponent,
    NavbarComponent,
    GuildinfoComponent
  ]
})

export class NucleoModule { }
