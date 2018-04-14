import { Component, OnInit, Input } from '@angular/core';
import { ViewChildAComponent } from '../view-child-a/view-child-a.component';

@Component({
  selector: 'app-view-child-b',
  templateUrl: './view-child-b.component.html',
  styleUrls: ['./view-child-b.component.css']
})
export class ViewChildBComponent implements OnInit {

  @Input() todo: ViewChildAComponent;

  constructor() { }

  ngOnInit() {
  }

}
