import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent {
    @Input() label: string = '';
    @Input() icon: any;
    @Input() disabled: boolean = false;
    @Input() isPassword: boolean = false;
}