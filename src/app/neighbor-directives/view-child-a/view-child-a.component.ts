import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-a',
  templateUrl: './view-child-a.component.html',
  styleUrls: ['./view-child-a.component.css']
})
export class ViewChildAComponent implements OnInit {

  userInput: string;

  constructor() { }

  ngOnInit() {
  }

  save(event: any) {
    this.userInput = event.value;
  }

}
