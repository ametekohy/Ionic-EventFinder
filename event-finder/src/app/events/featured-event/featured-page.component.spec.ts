import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPage } from './featured-page.component';
import {TicketmasterService} from '../shared/ticketmaster.service';
import {Shake} from '@ionic-native/shake/ngx';

describe('FeaturedPage', () => {
  let component: FeaturedPage;
  let fixture: ComponentFixture<FeaturedPage>;
  let ticketMasterServiceSpy: jasmine.SpyObj<TicketmasterService>;
  let shakeSpy: jasmine.SpyObj<Shake>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: TicketmasterService,
          useValue: ticketMasterServiceSpy
        },
        {
          provide: Shake,
          useValue: shakeSpy
        },
      ]
    }).compileComponents();

    ticketMasterServiceSpy = TestBed.get(TicketmasterService);
    shakeSpy = TestBed.get(Shake);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
