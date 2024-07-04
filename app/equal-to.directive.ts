import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[equalTo][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EqualToValidatorDirective,
      multi: true
    }
  ]
})
export class EqualToValidatorDirective implements Validator {
  @Input('equalTo')
  targetControl!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    const target = control.parent?.get(this.targetControl);
    if (target && control.value !== target.value) {
      return { equalTo: true };
    }
    return null;
  }
}
