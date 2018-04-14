import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';

import { GridContainerDemosModule } from './grid-container-demos/grid-container-demos.module';
import { GridItemDemosModule } from './grid-item-demos/grid-item-demos.module';
import { NeighborDirectivesComponent } from './neighbor-directives/neighbor-directives.component';
import { DropdownModule } from 'primeng/dropdown';
import { AppFooterComponent } from './neighbor-directives/app-footer/app-footer.component';
import { ViewChildAComponent } from './neighbor-directives/view-child-a/view-child-a.component';
import { ViewChildBComponent } from './neighbor-directives/view-child-b/view-child-b.component'
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    NeighborDirectivesComponent,
    AppFooterComponent,
    ViewChildAComponent,
    ViewChildBComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollPanelModule,
    CardModule,
    GridContainerDemosModule,
    GridItemDemosModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
