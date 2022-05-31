import {Injectable} from '@angular/core';
import {RootObject, Event} from './Event';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GeolocationService} from '../../shared/geolocation.service';


@Injectable({
    providedIn: 'root'
})
export class TicketmasterService {
    url = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=nl&locale=nl-nl';
    apiKey = 'apikey=30CjcvRTRY9jAaItBosILJK7gK13suBA';
    lastRadius = 100;

    randomEvent: Event;

    /**
     * Constructor of the TicketmasterService
     * @param http HttpClient for making API calls to URLs
     * @param geo GeolocationService to get current GeoHash of device
     */
    constructor(private http: HttpClient, private geo: GeolocationService) {
    }

    /**
     * Adds a random time and size of 1 to the URL to get a random event back
     * @returns Observable<RootObject> of random event
     */
     getRandomEvent() {
        const randomURL = this.url + '&' + this.apiKey + '&startDateTime=' + this.randomTime() + '&sort=date,asc' + '&size=1';

        this.http.get<RootObject>(randomURL).subscribe(
            result => {
                this.randomEvent = result._embedded.events[0];
            }
        );

        return this.randomEvent;
    }

    /**
     * Returns a random datetime between 90 days in format YYYY-mm-ddThh:mm:ssZ
     * @returns dateTime as string in format YYYY-mm-ddThh:mm:ssZ
     */
    private randomTime(): string {
        const date = new Date();
        date.setDate(date.getDate() + Math.random() * 90);
        return date.getFullYear() + '-' + ('0' + date.getMonth()).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + 'T12:00:00Z';
    }

    /**
     * Adds current GeoHash of device and set radius to the URL to get nearby events
     * @param radius number
     * @returns Observable<RootObject> of nearby events
     */
    getNearbyEvents(radius: number): Observable<RootObject> {
        const nearbyEventsURL = this.url + '&' + this.apiKey + '&geoPoint=' + this.geo.getCurrentGeoHash() + '&radius=' + radius + '&size=200';
        this.lastRadius = radius;
        return this.http.get<RootObject>(nearbyEventsURL);
    }

    /**
     * Gets an event with the given id
     * @param id String
     * @returns Observable<RootObject> of the event
     */
    getEvent(id: string): Observable<RootObject> {
        const eventURL = this.url + '&' + this.apiKey + '&id=' + id + '&size=1';
        return this.http.get<RootObject>(eventURL);
    }

    /**
     * Gets events with the given artist id
     * @param artist id String
     * @returns Observable<RootObject> of the event
     */
    getAllArtistEvents(id: string): Observable<RootObject> {
        const artistevents = this.url + '&' + this.apiKey + '&attractionId=' + id + '&geoPoint=' + this.geo.getCurrentGeoHash() + '&radius=' + this.lastRadius;
        return this.http.get<RootObject>(artistevents);
    }
}
