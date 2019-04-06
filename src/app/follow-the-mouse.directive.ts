import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[tdtdFollowTheMouse]'
})
export class FollowTheMouseDirective {

@Input('ratio') parallaxRatio : number = 0
initialX : number = 4
initialY : number = 4

  constructor(private eleRef : ElementRef) {
    this.initialY = this.eleRef.nativeElement.getBoundingClientRect().top
    this.initialX = this.eleRef.nativeElement.getBoundingClientRect().left
   }
   
  @HostListener('window:mousemove', ['$event'])
  onMousemove(event: MouseEvent) { 
    // this.eleRef.nativeElement.style.top = (50) + 'px'
    console.log('Mouse is at: ' + event.clientX + ', ' + event.clientY);
    this.eleRef.nativeElement.style.top = (this.initialY + 50 + (event.clientY * this.parallaxRatio)/2) + 'px'
    this.eleRef.nativeElement.style.left = (this.initialX + 200 + ((event.clientX) * this.parallaxRatio)) + 'px'
  }
}
