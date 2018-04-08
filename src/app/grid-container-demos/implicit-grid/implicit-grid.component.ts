import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-implicit-grid',
  templateUrl: './implicit-grid.component.html',
  styleUrls: ['./implicit-grid.component.css']
})
export class ImplicitGridComponent implements OnInit {

  classControl: Map<number, string>;
  classFlag = "grid_1";

  constructor() { }

  ngOnInit() {
    this.classControl = new Map([
      [1, 'grid_1'],
      [2, 'grid_2'],
      [3, 'grid_3'],
    ]);
  }

  setClass(i: number) {
    this.classFlag = this.classControl.get(i);
  }
}
