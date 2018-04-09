import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridItemDemosComponent } from './grid-item-demos.component';
import { JustifyComponent } from './justify/justify.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        GridItemDemosComponent
    ],
    declarations: [
        GridItemDemosComponent,
        JustifyComponent
    ],
    providers: [],
})
export class GridItemDemosModule { }
