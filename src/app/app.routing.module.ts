import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BootstrapComponent } from './bootstrap/bootstrap.component';


const routes: Routes = [
    {
        path: '',
        component: BootstrapComponent,
        loadChildren: './pages/pages.module#PagesModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
