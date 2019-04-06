import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[tdtdParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio : number = 1
  @Input('horizRatio') horizParallax : number = 0
  initialTop : number = 0
  initialLeft : number = 0

  constructor(private eleRef : ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;    
    this.initialLeft = this.eleRef.nativeElement.getBoundingClientRect().left;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event){
    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
    this.eleRef.nativeElement.style.left = (this.initialLeft + (window.scrollY * this.horizParallax)) + 'px'
  } 
}
