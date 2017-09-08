import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // Host Binding takes property which we need to bind. Use camel case since DOM doesn't understand -.
  @HostBinding('style.backgroundColor') backgroundColor : string = "transparent";
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elementRef.nativeElement,"background-color","blue");
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement,"background-color","blue");
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement,"background-color","transparent");
    this.backgroundColor = 'transparent';
  }
}
