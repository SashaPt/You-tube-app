import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSetColor]',
})
export class SetColorDirective {
  constructor(private el: ElementRef) {}

  // eslint-disable-next-line class-methods-use-this
  calcDiff(date: Date): number {
    const currentDate = new Date();

    const days = Math.floor((currentDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
    return days;
  }

  @Input() set appSetColor(date: Date) {
    const difference = this.calcDiff(date);
    if (difference < 7) {
      this.el.nativeElement.style.backgroundColor = '#2f80ed';
    } else if (difference >= 7 && difference < 31) {
      this.el.nativeElement.style.backgroundColor = '#27ae60';
    } else if (difference >= 31 && difference < 182) {
      this.el.nativeElement.style.backgroundColor = '#f2c94c';
    } else {
      this.el.nativeElement.style.backgroundColor = '#eb5757';
    }
  }
}
