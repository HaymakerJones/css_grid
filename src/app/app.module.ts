import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';

import { GridContainerDemosModule } from './grid-container-demos/grid-container-demos.module';
import { GridItemDemosModule } from './grid-item-demos/grid-item-demos.module';



@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollPanelModule,
    CardModule,
    GridContainerDemosModule,
    GridItemDemosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
