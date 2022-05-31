import {Injectable} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import * as Geohash from 'ngeohash/main.js';

@Injectable({
    providedIn: 'root'
})
export class GeolocationService {
    currentCoords: Coordinates;

    /**
     * Constructor of the GeolocationService
     * @param geolocation Inject the ionic-native Geolocation
     */
    constructor(private geolocation: Geolocation) {
    }

    /**
     * Promise that returns the first location update
     * @resolve geohash of current location
     * @reject on timeout
     */
    public getLocation = new Promise((resolve, reject) => {
        this.geolocation.watchPosition().subscribe((resp) => {
            this.currentCoords = resp.coords;
            resolve(this.convertToGeoHash(this.currentCoords.latitude, this.currentCoords.longitude));
        });

        setTimeout(() => {
            reject('Timeout');
        }, 5000);
    });

    /**
     * Converts the currentCoords into GeoHash with converToGeoHash and returns it
     * @returns string GeoHash
     */
    getCurrentGeoHash() {
        if (this.currentCoords !== undefined) {
            return this.convertToGeoHash(this.currentCoords.latitude, this.currentCoords.longitude);
        }
    }

    /**
     * Gets the current device location through ionic-native Geolocation
     * Sets the currentCoords
     * @returns Coordinates currentCoords
     */
    getCurrentCoords(): Coordinates {
        this.geolocation.getCurrentPosition().then(resp => {
            this.currentCoords = resp.coords;
        }).catch((error) => {
            console.log('Error getting location', error);
        });

        return this.currentCoords;
    }

    /**
     * Converts the given latitude and longitude to a GeoHash through 'ngeohash'-module
     * @param latitude Horizontal measurement in the form of a number
     * @param longitude Vertical measurement in the form of a number
     * @returns number In the form of a Geohash
     */
    private convertToGeoHash(latitude: number, longitude): number {
        // The numberOfChars will indicate how specific the location will be, higher number is smaller area
        return Geohash.encode(latitude, longitude, 9); // geohash: 'u120fxw'
    }
}
