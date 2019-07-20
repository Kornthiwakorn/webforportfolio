
import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';
import { style } from '@angular/animations';

@Directive({
  selector: '[appDirectiveMenu]'
})
export class DirectiveMenuDirective {

  constructor(private elementRef : ElementRef) { 
      const elem = this.elementRef.nativeElement as HTMLElement;
      elem.onmouseover = function(){

      }


  }

  @HostBinding('style.color') 
  color:string;
  @HostBinding('style.border') 
  border:string;


  @HostListener('mouseover')
  onmouseover(){
    this.color = '#8dacec';
    this.border = "1px solid #8dacec"
  }
  
  @HostListener('mouseout')
  onmouseout(){
    this.color = 'white';
    this.border = null;
    
  }

}
