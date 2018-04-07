import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridContainerDemosComponent } from './grid-container-demos.component';
import { ExplicitGridComponent } from './explicit-grid/explicit-grid.component';
import { GridColRowComponent } from './grid-col-row/grid-col-row.component';
import { BasicGridComponent } from './basic-grid/basic-grid.component';



@NgModule({
    imports: [],
    exports: [
        GridContainerDemosComponent
    ],
    declarations: [
        GridContainerDemosComponent,
        ExplicitGridComponent,
        GridColRowComponent,
        BasicGridComponent
    ],
    providers: [],
})
export class GridContainerDemosModule { }
