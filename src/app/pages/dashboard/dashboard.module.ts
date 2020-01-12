import { NgModule } from '@angular/core';

// Routing
import { DashboardRoutingModule } from './dashboard.routing';

// Shared Module
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';

// Local Services
import { DashboardService } from './dashboard.service';


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        SharedModule,
        DashboardRoutingModule,
    ],
    exports: [],
    providers: [
        DashboardService
    ],
})
export class DashboardModule {}
