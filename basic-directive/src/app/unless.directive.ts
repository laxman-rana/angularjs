import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // this is setter method. method name should match the directive selector.
  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
  // TemplateRef will transform to <ng-template> to insert our template/html inside ViewContainerRef.
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}
