import {Component, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {Event} from '../shared/Event';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnChanges {
    favorite: boolean;
    @Input() event: Event;
    @Output() favourite = new EventEmitter<boolean>();
    @Output() name = new EventEmitter<string>();

    constructor(private storage: Storage) {}

    ngOnChanges(changes: SimpleChanges) {
        if (this.event !== undefined) {
            this.name.emit(this.event.name);
        }
        this.checkFavorite(changes.event.currentValue);
    }

    toggleFavorite(event: Event) {
        this.storage.get('favorites').then(
            result => {
                if (result == null) {
                    const events: Event[] = [];
                    this.storage.set('favorites', events);
                }

                if (!result.some(e => e.id === event.id)) {
                    result.push(event);
                } else if (result.some(e => e.id === event.id)) {
                    result = result.filter(obj => obj.id !== event.id);
                }
                this.storage.set('favorites', result);
                this.favorite = !this.favorite;
                this.favourite.emit(this.favorite);
            }
        );

    }

    private checkFavorite(event: Event) {
        this.storage.get('favorites').then(
            result => {
                if (result !== null && event !== undefined) {
                    this.favorite = result.some(e => e.id === event.id);
                } else if (result == null) {
                    this.favorite = false;
                }
                this.favourite.emit(this.favorite);
            },
            reason => {
                console.log(reason);
            }
        );
    }
}
