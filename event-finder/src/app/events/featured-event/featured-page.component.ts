import {Component} from '@angular/core';
import {Event} from '../shared/Event';
import {Shake} from '@ionic-native/shake/ngx';
import {TicketmasterService} from '../shared/ticketmaster.service';
import {PlatformService} from '../../shared/platform.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'featured-page.component.html',
    styleUrls: ['featured-page.component.scss']
})
export class FeaturedPage {
    featuredEvent: Event;
    shakeBool: boolean;

    constructor(private api: TicketmasterService, private shake: Shake, private platform: PlatformService) {
    }

    ionViewDidEnter() {
        this.featuredEvent = this.api.getRandomEvent();

        if (this.platform.isMobile()) {
            this.shake.startWatch(30).subscribe(() => {
                this.featuredEvent = this.api.getRandomEvent();
                this.shakeBool = true;
                setTimeout(() => this.shakeBool = false, 1000);
            });
        }
    }
}
