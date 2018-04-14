import { Component, OnInit, ViewChild, ViewChildren, ContentChild, QueryList, AfterViewInit, AfterContentInit, ElementRef } from '@angular/core';
import { ViewChildAComponent } from './view-child-a/view-child-a.component';
import { ViewChildBComponent } from './view-child-b/view-child-b.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

export class TodoList {
  private todos: ViewChildAComponent[] = [];

  add(todo: ViewChildAComponent) { this.todos.push(todo); }

  remove(todo: ViewChildAComponent) {
    this.todos.filter(
      data => data !== todo
    );
  }

  set(todo: ViewChildAComponent, index: number) {
    this.todos[index] = todo;
  }

  get(index: number) {
    return this.todos[index];
  }

  getAll() { return this.todos; }
}

@Component({
  selector: 'app-neighbor-directives',
  templateUrl: './neighbor-directives.component.html',
  styleUrls: ['./neighbor-directives.component.css'],
  viewProviders: [TodoList]
})
export class NeighborDirectivesComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ViewChild(ViewChildAComponent) inputComponent: ViewChildAComponent;
  @ViewChildren(ViewChildBComponent) todoComponent: QueryList<ViewChildBComponent>;
  @ContentChild(AppFooterComponent) footer: AppFooterComponent;


  constructor(private todos: TodoList) { }

  addTodo(todo: any) {

  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log("After content init: ", this.footer);
  }

  ngAfterViewInit() {
    console.log("After view init: ", this.inputComponent.userInput);
  }

}
