import { Component, OnInit, Input, ViewEncapsulation, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input("srvElement") element : {type: string, name:string, content:string};

  @ContentChild("paragraphCreated") paragraph : ElementRef;

  constructor() { 
    console.log("construtor called");
  }

  ngOnInit() {
    console.log("ngOnInit called");
    console.log("Content child "+ this.paragraph.nativeElement.textContent);
  }
  
  ngOnChanges() {
    console.log("ngOnChanges called!");
  }

  ngDoCheck() {
    console.log("ngDoCheck called!");
  }

  ngAfterContentInit() {
    console.log("AfterContentInit called!");
    console.log("Content child "+ this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("AfterContentChecked called!");
  }

  ngAfterViewInit() {
    console.log("AfterViewInit called!");
  }
  ngAfterViewChecked() {
    console.log("AfterViewChecked called!");
  }
  ngOnDestroy() {
    console.log("OnDestroy called!");
  }

}
