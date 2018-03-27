import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent,
    Demo1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollPanelModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
