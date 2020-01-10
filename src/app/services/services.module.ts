import { NgModule } from '@angular/core';

import {
    TitleService,
    LocalStorageService
  } from './index';


@NgModule({
    declarations: [],
    imports: [ ],
    exports: [],
    providers: [
        TitleService,
        LocalStorageService
    ],
})
export class ServicesModule {}
