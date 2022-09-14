import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function rangeValidator(min: number, max: number): ValidatorFn {
  return (ctrl: AbstractControl): null | ValidationErrors => {
    if (ctrl.value >= min && ctrl.value <= max) {
      return null;
    } else {
      return {
        range: ctrl.value
      };
    }
  };
}
