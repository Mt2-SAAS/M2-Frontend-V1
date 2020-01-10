import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NgModule } from '@angular/core';

import { BootstrapComponent } from './bootstrap/bootstrap.component';


const RootRoutes: Routes = [
    {
        path: '',
        component: BootstrapComponent,
        loadChildren: './pages/pages.module#PagesModule'
    }
];

const RouterConfig: ExtraOptions = {
    useHash: false
}

@NgModule({
    imports: [
        RouterModule.forRoot(RootRoutes, RouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
