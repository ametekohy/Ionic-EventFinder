import {ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventDetailsPage} from './event-details.page';
import {ActivatedRoute} from '@angular/router';
import {TicketmasterService} from '../shared/ticketmaster.service';

describe('EventDetailsPage', () => {
    let component: EventDetailsPage;
    let fixture: ComponentFixture<EventDetailsPage>;
    let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>;
    let ticketMasterServiceSpy: jasmine.SpyObj<TicketmasterService>;
    let changeDetectorRefSpy: jasmine.SpyObj<ChangeDetectorRef>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EventDetailsPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: activatedRouteSpy
                },
                {
                    provide: TicketmasterService,
                    useValue: ticketMasterServiceSpy
                },
                {
                    provide: ChangeDetectorRef,
                    useValue: changeDetectorRefSpy
                }
            ]
        })
            .compileComponents();

        activatedRouteSpy = TestBed.get(ActivatedRoute);
        ticketMasterServiceSpy = TestBed.get(TicketmasterService);
        changeDetectorRefSpy = TestBed.get(ChangeDetectorRef);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EventDetailsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
