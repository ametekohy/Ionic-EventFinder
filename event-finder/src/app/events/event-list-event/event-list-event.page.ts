import { Component, OnInit, Input } from '@angular/core';
import {Attraction2, Event} from '../shared/Event';
import {ActivatedRoute} from '@angular/router';
import {TicketmasterService} from '../shared/ticketmaster.service';
import {GeolocationService} from '../../shared/geolocation.service';

@Component({
  selector: 'app-event-list-event',
  templateUrl: './event-list-event.page.html',
  styleUrls: ['./event-list-event.page.scss'],
})
export class EventListEventPage implements OnInit {
  artist: Attraction2;
  events: Event[];
  name: string;
  id: string;

  constructor(private route: ActivatedRoute, private api: TicketmasterService, private geo: GeolocationService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.geo.getLocation.then(() => {
      this.api.getAllArtistEvents(this.id).subscribe( res => {
        this.events = res._embedded.events;
        if ( this.events[0]._embedded.attractions !== undefined) {
          this.name = this.events[0]._embedded.attractions[0].name;
        }
      });
    }).catch(x => console.log(x));


  }

}
