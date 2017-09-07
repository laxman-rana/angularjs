import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:"server",name:"TestServer",content:"Just a Server!"}];
  
   onServerCreated(serverData:{serverName:string, content:string}) {
      this.serverElements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.content
      });
    }

    onBlueprintCreated(blurprintData:{blueprintName:string, content:string}) {
      this.serverElements.push({
        type: 'blueprint',
        name: blurprintData.blueprintName,
        content: blurprintData.content
      });
    }

}
