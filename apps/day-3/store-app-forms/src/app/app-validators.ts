import { AbstractControl, ValidationErrors } from "@angular/forms";

export class AppValidators {
    // Custom validator
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return {
                cannotContainSpace: true
            };
        }

        return null;
    }

    // Async validator
    static shouldBeUnique(control: AbstractControl):
        Promise<ValidationErrors | null> {
        return new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    if (control.value === 'naveen')
                        resolve({ shouldBeUnique: true });
                    else
                        resolve(null);
                }, 3000);
            }
        );
    }
}
