import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[number]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumbersDirective,
    multi: true
  }]
})
export class NumbersDirective implements ControlValueAccessor {

  onChanged: any;
  onTouched: any;

  constructor(private el: ElementRef) { }

  /**
   * Event listener for key release
   * @param $event any
   */
  @HostListener('keyup', ['$event']) onKeyRelease($event: any) {
    
    let value = $event.target.value;
    let pos = value.indexOf('.');

    value = value.replace(/[\D]/g, '');

    if(pos > 0)
      value = value.substr(0, pos) + '.' + value.substr(pos);

    $event.target.value = value;
    this.onChanged(value);

  }

  /**
   * Function that updates model value on change
   * 
   * @param fn any
   */
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  /**
   * Function that updates model value on touch
   * 
   * @param fn any
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Gets the model value
   * 
   * @param obj any
   */
  writeValue(obj: any): void {
    this.el.nativeElement.value = obj;
  }

}
