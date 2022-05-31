import {ShakeDirective} from './shake.directive';
import {TestBed} from "@angular/core/testing";
import {Component, NO_ERRORS_SCHEMA} from "@angular/core";

@Component({
    template: `<div appShake="true">test</div>`,
    styles: ['.shake { background-color: red; }']
})
class TestAppShakeComponent {
}

describe('ShakeDirective', () => {
    let fixture;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [TestAppShakeComponent, ShakeDirective],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .createComponent(TestAppShakeComponent);
        fixture.detectChanges(); // initial binding
    });

    it('appShake should add the class name shake', () => {
        const div: HTMLElement = fixture.nativeElement.querySelector('div');
        const addedClass = div.className;
        expect(addedClass).toBe('shake');
    });
});
