import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TicketmasterService} from '../shared/ticketmaster.service';
import {ChangeDetectorRef} from '@angular/core';
import {Event} from '../shared/Event';

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.page.html',
    styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
    event: Event;
    name = 'Event';
    favourite: string;

    constructor(private route: ActivatedRoute, private api: TicketmasterService, private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.api.getEvent(id).subscribe(
            res => {
                this.event = res._embedded.events[0];
            }
        );
    }

    onChange(favourite: string) {
        this.favourite = favourite;
    }

    onNameChange(name: string) {
        this.name = name;
        this.cdr.detectChanges();
    }

}
