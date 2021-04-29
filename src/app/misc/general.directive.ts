import { Directive, ElementRef ,TemplateRef,HostListener, Input, HostBinding } from "@angular/core";

@Directive({
    selector : '[generalDirec]'
})

export class GeneralDirective {
    constructor(private ele : ElementRef) {
                   // console.log(embRef)
        this.ele.nativeElement.style.color = this.defaultColor || 'violet';
    }

    @Input() generalDirec : string;
    @Input() defaultColor : string;

    @HostListener('click') onclick(){
        this.addColor(this.generalDirec || this.defaultColor);
    }

    @HostBinding('style.color') color:string = 'blue';

    private addColor(color){
        this.ele.nativeElement.style.color = color;
    }
}