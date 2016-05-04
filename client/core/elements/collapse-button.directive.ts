import { Directive, ElementRef } from 'angular2/core';

@Directive({
  selector: '.collapse-button',
  host: {
    '(click)': 'onClick()',
  },
  providers: [ElementRef]
})
export class CollapseButtonDirective {
  constructor (private element: ElementRef) {

  }

  onClick() {
    this.element.nativeElement.classList.toggle('expand');
  }
}