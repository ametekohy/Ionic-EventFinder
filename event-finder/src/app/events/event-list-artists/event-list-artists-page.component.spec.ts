import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListArtistsPage } from './event-list-artists.component';
import {Storage} from "@ionic/storage";
import {TicketmasterService} from "../shared/ticketmaster.service";
import {GeolocationService} from "../../shared/geolocation.service";
import {PlatformService} from "../../shared/platform.service";
import {PermissionsService} from "../../settings/permissions/permissions.service";

describe('EventListArtistsPage', () => {
  let component: EventListArtistsPage;
  let fixture: ComponentFixture<EventListArtistsPage>;
  let ticketMasterServiceSpy: jasmine.SpyObj<TicketmasterService>;
  let geolocationServiceSpy: jasmine.SpyObj<GeolocationService>;
  let platformServiceSpy: jasmine.SpyObj<PlatformService>;
  let permissionsServiceSpy: jasmine.SpyObj<PermissionsService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventListArtistsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: TicketmasterService,
          useValue: ticketMasterServiceSpy
        },
        {
          provide: GeolocationService,
          useValue: geolocationServiceSpy
        },
        {
          provide: PlatformService,
          useValue: platformServiceSpy
        },
        {
          provide: PermissionsService,
          useValue: permissionsServiceSpy
        },
      ]
    }).compileComponents();

    ticketMasterServiceSpy = TestBed.get(TicketmasterService);
    geolocationServiceSpy = TestBed.get(GeolocationService);
    platformServiceSpy = TestBed.get(PlatformService);
    permissionsServiceSpy = TestBed.get(PermissionsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListArtistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
