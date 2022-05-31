import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {EventsModule} from '../shared/events.module';
import {EventListArtistsPage} from './event-list-artists.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path: '', component: EventListArtistsPage}
        ]),
        EventsModule
    ],
    declarations: [EventListArtistsPage]
})
export class EventListArtistsPageModule {
}
