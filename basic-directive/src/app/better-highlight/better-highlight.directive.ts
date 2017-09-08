import { Directive,
   OnInit, 
   Renderer2, 
   ElementRef, 
   HostListener, 
   HostBinding,
   Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  odd : boolean = false;

  @Input() defaultBackgroundColor : string = "transparent";
  @Input() highlightColor: string = "blue";

  // Host Binding takes property which we need to bind. Use camel case since DOM doesn't understand -.
  @HostBinding('style.backgroundColor') backgroundColor : string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elementRef.nativeElement,"background-color","blue");
    this.backgroundColor = this.defaultBackgroundColor;
  }
  // Host Listener takes events of element
  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement,"background-color","blue");
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement,"background-color","transparent");
    this.backgroundColor = this.defaultBackgroundColor;
  }

  
}
