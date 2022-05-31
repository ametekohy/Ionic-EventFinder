import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {EventDetailsPage} from './event-details.page';
import {EventsModule} from '../shared/events.module';

const routes: Routes = [
    {
        path: ':id',
        component: EventDetailsPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        EventsModule
    ],
    declarations: [EventDetailsPage]
})
export class EventDetailsPageModule {
}
