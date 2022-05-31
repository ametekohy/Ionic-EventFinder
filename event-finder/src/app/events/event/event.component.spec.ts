import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EventComponent} from './event.component';
import {Storage} from '@ionic/storage';

describe('EventComponent', () => {
    let component: EventComponent;
    let fixture: ComponentFixture<EventComponent>;
    let storageSpy: jasmine.SpyObj<Storage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EventComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                {
                    provide: Storage,
                    useValue: storageSpy
                }
            ]
        })
        .compileComponents();

        storageSpy = TestBed.get(Storage);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EventComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
