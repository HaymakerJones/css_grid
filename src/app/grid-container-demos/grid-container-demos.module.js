"use strict";var __decorate=this&&this.__decorate||function(e,o,n,r){var i,t=arguments.length,c=t<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,o,n,r);else for(var _=e.length-1;0<=_;_--)(i=e[_])&&(c=(t<3?i(c):3<t?i(o,n,c):i(o,n))||c);return 3<t&&c&&Object.defineProperty(o,n,c),c};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),common_1=require("@angular/common"),grid_container_demos_component_1=require("./grid-container-demos.component"),explicit_grid_component_1=require("./explicit-grid/explicit-grid.component"),grid_col_row_component_1=require("./grid-col-row/grid-col-row.component"),basic_grid_component_1=require("./basic-grid/basic-grid.component"),min_max_component_1=require("./min-max/min-max.component"),grid_area_component_1=require("./grid-area/grid-area.component"),implicit_grid_component_1=require("./implicit-grid/implicit-grid.component"),GridContainerDemosModule=function(){function e(){}return e=__decorate([core_1.NgModule({imports:[common_1.CommonModule],exports:[grid_container_demos_component_1.GridContainerDemosComponent],declarations:[grid_container_demos_component_1.GridContainerDemosComponent,explicit_grid_component_1.ExplicitGridComponent,grid_col_row_component_1.GridColRowComponent,basic_grid_component_1.BasicGridComponent,min_max_component_1.MinMaxComponent,grid_area_component_1.GridAreaComponent,implicit_grid_component_1.ImplicitGridComponent],providers:[]})],e)}();exports.GridContainerDemosModule=GridContainerDemosModule;