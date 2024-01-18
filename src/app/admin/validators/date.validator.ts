import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function DateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value || !control.value.length) {
      return null;
    }
    const today = new Date().getTime();
    const userDate = new Date(control.value).getTime();
    if (userDate > today) {
      return {
        futureDate: {
          value: control.value,
        },
      };
    }

    return null;
  };
}
