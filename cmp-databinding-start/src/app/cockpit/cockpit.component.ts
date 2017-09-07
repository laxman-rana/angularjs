import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName:string, content:string}>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{serverName:string, content:string}>();

  newServerName = '';
  newServerContent = '';
  @ViewChild("serverContentInput")  serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(this.serverContentInput.nativeElement.value);
    this.serverCreated.emit({serverName:serverNameInput.value, content:this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName:this.newServerName, content:this.newServerContent});
  }
}
