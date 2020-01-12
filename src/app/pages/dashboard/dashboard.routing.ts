import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';


const DashboardRoutes: Routes = [
    { path: '', component: DashboardComponent },
];

@NgModule({
    imports: [RouterModule.forChild(DashboardRoutes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
