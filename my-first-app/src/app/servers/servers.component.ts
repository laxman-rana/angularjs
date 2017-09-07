import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',// Element
  //selector: '[app-servers]', // Attribute
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServer: boolean = false;
  serverCreationStatus:string = "No server is created";
  serverName: string = "Test Server";
  serverCreated = false;
  servers = ['Test Server', 'Test server2'];

  constructor() { 
    setTimeout(()=>{
      this.allowServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    console.log("clicked");
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name of server "+ this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
