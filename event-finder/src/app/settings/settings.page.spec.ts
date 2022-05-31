import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPage } from './settings.page';
import {TicketmasterService} from "../events/shared/ticketmaster.service";
import {GeolocationService} from "../shared/geolocation.service";
import {PlatformService} from "../shared/platform.service";
import {PermissionsService} from "./permissions/permissions.service";
import {ThemeService} from "../shared/theme.service";

describe('SettingsPage', () => {
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;
  let themeServiceSpy: jasmine.SpyObj<ThemeService>;
  let permissionsServiceSpy: jasmine.SpyObj<PermissionsService>;
  let platformServiceSpy: jasmine.SpyObj<PlatformService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: ThemeService,
          useValue: themeServiceSpy
        },
        {
          provide: PermissionsService,
          useValue: permissionsServiceSpy
        },
        {
          provide: PlatformService,
          useValue: platformServiceSpy
        }
      ]
    })
    .compileComponents();

    themeServiceSpy = TestBed.get(ThemeService);
    permissionsServiceSpy = TestBed.get(PermissionsService);
    platformServiceSpy = TestBed.get(PlatformService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
