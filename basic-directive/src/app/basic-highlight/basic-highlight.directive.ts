import {Directive, OnInit, ElementRef} from '@angular/core';

@Directive({
    selector : '[appBasicHighlight]' // Directive as attribute [] We can use .appBasicHighlight to treat directive as class name
})
export class BasicHighlightDirective implements OnInit {

    // Here Angular will provide/inject the ElementRef object
    constructor(private elementRef: ElementRef){
        
    }

    ngOnInit() {
        console.log("calling");
        this.elementRef.nativeElement.style.backgroundColor='green';
    }
}