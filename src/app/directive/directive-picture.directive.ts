import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';
import { style } from '@angular/animations';


@Directive({
  selector: '[appDirectivePicture]'
})
export class DirectivePictureDirective {

  constructor(private elementRef : ElementRef) { 
    const elem = this.elementRef.nativeElement as HTMLElement;
    elem.onmouseover = function(){

    }


}

@HostBinding('style.color') 
color:string;
@HostBinding('style.border') 
border:string;
@HostBinding('style.opacity') 
opacity:string;


@HostListener('mouseover')
onmouseover(){
  
  this.border = "1.8px solid #8dacec"
  
}

@HostListener('mouseout')
onmouseout(){

  this.border = null;
  
}

}