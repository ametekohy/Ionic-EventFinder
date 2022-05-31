import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventComponent} from '../event/event.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [EventComponent],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        EventComponent
    ]
})
export class EventsModule {
}
