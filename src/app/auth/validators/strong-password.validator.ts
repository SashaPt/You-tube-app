import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function StrongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value || !control.value.length) {
      return null;
    }
    const notLength = control.value.length < 8;
    if (notLength) {
      return {
        strongPassword: {
          value: control.value,
          message: 'at least 8 characters',
        },
      };
    }
    const notCase = !(
      /[A-Z]/.test(control.value) && /[a-z]/.test(control.value)
    );
    if (notCase) {
      return {
        strongPassword: {
          value: control.value,
          message: 'a mixture of both uppercase and lowercase letters',
        },
      };
    }
    const notNums = !/[0-9]/.test(control.value);
    if (notNums) {
      return {
        strongPassword: {
          value: control.value,
          message: 'a mixture of letters and numbers',
        },
      };
    }
    const chars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    const notChars = !chars.test(control.value);
    if (notChars) {
      return {
        strongPassword: {
          value: control.value,
          message:
            'inclusion of at least one special character, e.g., ! @ # ? ]',
        },
      };
    }

    return null;
  };
}
