import {Component} from '@angular/core';
import {Attraction2, Event} from '../shared/Event';
import {TicketmasterService} from '../shared/ticketmaster.service';
import {GeolocationService} from '../../shared/geolocation.service';
import {PlatformService} from '../../shared/platform.service';
import {PermissionsService} from '../../settings/permissions/permissions.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'event-list-artists-page.component.html',
    styleUrls: ['event-list-artists-page.component.scss']
})
export class EventListArtistsPage {
    nearbyEvents: Event[];
    uniqueArtists: Attraction2[];
    radius: number;
    location: boolean;

    constructor(private api: TicketmasterService, private geo: GeolocationService,
                private platform: PlatformService, private android: PermissionsService) {
        this.radius = 25;
        this.location = true;
    }

    ionViewDidEnter() {
        this.location = this.android.checkPermissionLocation();
        if (this.platform.isMobile() && this.location) {
            this.geo.getLocation.then(() => {
                this.getEventList();
            }).catch(x => console.log(x));
        }
    }

    private getEventList() {
        this.api.getNearbyEvents(this.radius).subscribe(
            res => {
                console.log(res._embedded.events);
                this.nearbyEvents = res._embedded.events;
                this.uniqueArtists = this.getUniqueArtists(this.nearbyEvents);
            }
        );
    }

    private getUniqueArtists(events: Event[]): Attraction2[] {
        const Seen = [];
        const uniqueArtists = events.filter( function(x: Event) {
            if (typeof x._embedded.attractions !== 'undefined') {
                if (!Seen.includes(x._embedded.attractions[0].id)) {
                    Seen.push(x._embedded.attractions[0].id);
                    return x;
                }
            }
        });

        return uniqueArtists.map(function(x) {
            if (typeof x._embedded.attractions !== 'undefined') {
                return x._embedded.attractions[0];
            }
        });
    }

    requestLocationPermission() {
        this.android.requestPermissionLocation();
    }
}
