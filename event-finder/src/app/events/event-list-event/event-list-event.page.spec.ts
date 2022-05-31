import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListEventPage } from './event-list-event.page';
import {TicketmasterService} from "../shared/ticketmaster.service";
import {GeolocationService} from "../../shared/geolocation.service";
import {PlatformService} from "../../shared/platform.service";
import {PermissionsService} from "../../settings/permissions/permissions.service";
import {ActivatedRoute} from "@angular/router";

describe('EventListEventPage', () => {
  let component: EventListEventPage;
  let fixture: ComponentFixture<EventListEventPage>;
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>;
  let ticketMasterServiceSpy: jasmine.SpyObj<TicketmasterService>;
  let geolocationServiceSpy: jasmine.SpyObj<GeolocationService>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListEventPage ],
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
          provide: GeolocationService,
          useValue: geolocationServiceSpy
        }
      ]
    })
    .compileComponents();

    activatedRouteSpy = TestBed.get(activatedRouteSpy);
    ticketMasterServiceSpy = TestBed.get(ticketMasterServiceSpy);
    geolocationServiceSpy = TestBed.get(GeolocationService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
