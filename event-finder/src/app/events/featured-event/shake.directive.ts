import {Directive, HostBinding, Input, OnChanges} from '@angular/core';

@Directive({
    selector: '[appShake]'
})
export class ShakeDirective implements OnChanges {
    @Input('appShake') bool: boolean;

    @HostBinding('class.shake') someField: boolean = false;

    constructor() {
        this.setShake(false);
    }

    ngOnChanges() {
        this.setShake(this.bool);
    }

    private setShake(bool: boolean) {
        this.someField = bool;
    }
}
