import { NgModule } from '@angular/core';

// Routing
import { DashboardRoutingModule } from './dashboard.routing';

// Shared Module
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        SharedModule,
        DashboardRoutingModule
    ],
    exports: [],
    providers: [],
})
export class DashboardModule {}
