import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  @Output() startGame = new EventEmitter<{increment:number}>();

   i: number = 0;
   ref: any;
  constructor() { }

  ngOnInit() {
  }

  onStart() {
     this.ref = setInterval(()=>{
      this.i = this.i + 1;   
      this.startGame.emit({increment:this.i});   
      }, 1000);
  }

  onStop() {
    clearInterval(this.ref);
  }
}
