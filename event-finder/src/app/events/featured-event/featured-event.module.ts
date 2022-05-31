import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FeaturedPage} from './featured-page.component';
import {EventsModule} from '../shared/events.module';
import {ShakeDirective} from './shake.directive';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: FeaturedPage}]),
        EventsModule
    ],
    declarations: [FeaturedPage, ShakeDirective]
})
export class FeaturedPageModule {
}
