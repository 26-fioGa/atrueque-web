import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent {
    @Input() formControlData: any = new FormControl();
    @Input() label: string = '';
    @Input() icon: any;
    @Input() disabled: boolean = false;
    @Input() type: string = 'text';

    getKeysOfErrors(): string[] {
        const errorsObj = this.formControlData.errors ?? {};
        return Object.keys(errorsObj);
    }
    getFirstError(): string {
        const firstKey = this.getKeysOfErrors()[0];
        return this.formControlData.errors[firstKey];
    }
}