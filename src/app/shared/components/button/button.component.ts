import { Component, Input } from '@angular/core';

type colorButton = 'primary' | 'secondary' | 'cream';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() label: string = '';
    @Input() color: colorButton = 'primary';
    @Input() disabled: boolean = false;
    @Input() isSmall: boolean = false;
}