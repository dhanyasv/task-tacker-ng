import { Directive, HostBinding, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector : '[miscD]'
})
export class MiscDirective {
    constructor(private tempRef : TemplateRef<any>,
        private viewRef : ViewContainerRef) {
    }

    @Input() set miscD(condition) {
        if(!condition) {
            this.viewRef.createEmbeddedView(this.tempRef)
        }
    }
    
}