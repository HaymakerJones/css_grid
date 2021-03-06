import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridContainerDemosComponent } from './grid-container-demos.component';
import { ExplicitGridComponent } from './explicit-grid/explicit-grid.component';
import { GridColRowComponent } from './grid-col-row/grid-col-row.component';
import { BasicGridComponent } from './basic-grid/basic-grid.component';
import { MinMaxComponent } from './min-max/min-max.component';
import { GridAreaComponent } from './grid-area/grid-area.component';
import { ImplicitGridComponent } from './implicit-grid/implicit-grid.component';
import { LayeredGridComponent } from './layered-grid/layered-grid.component';
import { FixedTableComponent } from './fixed-table/fixed-table.component';



@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        GridContainerDemosComponent
    ],
    declarations: [
        GridContainerDemosComponent,
        ExplicitGridComponent,
        GridColRowComponent,
        BasicGridComponent,
        MinMaxComponent,
        GridAreaComponent,
        ImplicitGridComponent,
        LayeredGridComponent,
        FixedTableComponent
    ],
    providers: [],
})
export class GridContainerDemosModule { }
