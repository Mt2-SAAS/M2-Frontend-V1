import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Navbar
import { NavbarComponent } from './navbar/navbar.component';

// Info Components
import { GuildInfoComponent } from './guildinfo/guildinfo.component';
import { PlayerInfoComponent } from './playerinfo/playerinfo.component';
import { ServerInfoComponent } from './serverinfo/serverinfo.component';


@NgModule({
    declarations: [
        NavbarComponent,
        GuildInfoComponent,
        PlayerInfoComponent,
        ServerInfoComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NavbarComponent,
        GuildInfoComponent,
        PlayerInfoComponent,
        ServerInfoComponent
    ],
    providers: [],
})
export class SharedModule {}
