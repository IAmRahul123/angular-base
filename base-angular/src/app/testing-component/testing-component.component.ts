import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-testing-component',

  //we can use it like this for above selector   <app-testing-component></app-testing-component>

  // selector: '.app-testing-component',

  // for this(.selector name) we have to use as a class name use it like
  //<div class="app-testing-component"></div>

  // selector: '[app-testing-component]',

  //for this it treats as an attribute of a component,
  // we can use it like <div app-testing-component ></div>

  //we will get same result from this no changes whatsoever
  //it just creates problem in understanding
  //it is recomeneded to use it like component <app-testing-component></app-testing-component>
  //it is universally understandable
  templateUrl: './testing-component.component.html',
  styleUrls: ['./testing-component.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  inputs: ['ParentData'],
})
export class TestingComponentComponent implements OnInit {
  ParentData: any;
  constructor() {}

  ngOnInit(): void {}
}
