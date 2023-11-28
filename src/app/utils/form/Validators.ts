import { AbstractControl, ValidationErrors } from "@angular/forms";
import { hasMaxLength, hasMinLength, isEmail, isInteger, isLength, isRequired, isValidPassword } from "../validations/validations";

class Validators {
    static required(fieldName: string, message?: string): (control: AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl) => {
            const hasValue = isRequired(control.value);
            if (!hasValue) {
                return { required: `Ingrese un ${fieldName} correcto` };
            }
            return null;
        };
    }

    static email(control: AbstractControl): ValidationErrors | null {
        if (!isEmail(control.value)) {
            return { email: 'Ingrese un correo válido' };
        }
        return null;
    }

    static maxLength(maxLength: number): (control: AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl) => {
            if (!hasMaxLength(control.value, maxLength)) {
                return { maxLength: `Solo tiene como máximo permitido ${maxLength} caracteres` };
            }
            return null;
        };
    }

    static minLength(minLength: number): (control: AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl) => {
            if (!hasMinLength(control.value, minLength)) {
                return { maxLength: `El mínimo permitido es de ${minLength} caracteres` };
            }
            return null;
        };
    }

    static integer(control: AbstractControl): ValidationErrors | null {
        if (!isInteger(control.value)) {
            return { integer: 'Ingrese números enteros' };
        }
        return null;
    }

    static withLength(length: number): (control: AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl) => {
            if (!isLength(control.value, length)) {
                return { withLength: `Solo tiene permitido ${length} caracteres` };
            }
            return null;
        };
    }

    static isValidPassword(control: AbstractControl): ValidationErrors | null {
        if (!isValidPassword(control.value)) {
            return { password: 'La contraseña debe contener como mínimo una mayúscula, un dígito y un caracter especial' };
        }
        return null;
    }
}

export default Validators;