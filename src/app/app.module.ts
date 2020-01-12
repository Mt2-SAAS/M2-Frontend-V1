import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';

// Componets
import { AppComponent } from './app.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

// Custom Modules
import { SharedModule } from './shared/shared.module';
import { ServicesModule } from './services/services.module';
import { AppRoutingModule } from './app.routing.module';

// Environment
import { environment } from 'src/environments/environment';

// Call a Local service to help to optain token
import { token_getter } from './services/token-getter';


const jwtOptions: JwtModuleOptions = {
    config: {
        tokenGetter: token_getter,
        whitelistedDomains: [environment.publicDomain],
        blacklistedRoutes: [
            environment.publicDomain + '/api/guild_rank/',
            environment.publicDomain + '/api/player_rank/',
            environment.publicDomain + '/api/signup/',
            environment.publicDomain + '/api/token/',
            environment.publicDomain + '/api/player_rank/'
        ]
    }
};


@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ServicesModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot(jwtOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
