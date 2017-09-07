import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  oddGameData =[];
  evenGameData =[];

  onStartedGame(startGameData:{increment:number}) {
    
    if((startGameData.increment%2) == 0) {
      console.log("even")
      this.evenGameData.push(startGameData.increment);
    } else {
      console.log("odd")
      this.oddGameData.push(startGameData.increment);
    }
    
  }
}
