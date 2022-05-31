import { TestBed } from '@angular/core/testing';

import { TicketmasterService } from './ticketmaster.service';
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {GeolocationService} from "../../shared/geolocation.service";

describe('TicketmasterService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let ticketmasterServiceSpy: jasmine.SpyObj<TicketmasterService>;
  let geolocationServiceSpy: jasmine.SpyObj<GeolocationService>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      {
        provide: TicketmasterService,
        useValue: ticketmasterServiceSpy
      },
      {
        provide: GeolocationService,
        useValue: geolocationServiceSpy
      }
    ]
  }));

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    ticketmasterServiceSpy = TestBed.get(TicketmasterService);
    geolocationServiceSpy = TestBed.get(GeolocationService);
  });

  it('exists', () => {
    const service: TicketmasterService = TestBed.get(TicketmasterService);
    expect(service).toBeTruthy();
  });

