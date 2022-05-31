import {Injectable} from '@angular/core';
import {Platform} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class PlatformService {

    constructor(private platform: Platform) {
    }

    isMobile(): boolean {
        if (this.platform.platforms().includes('android') || this.platform.platforms().includes('cordova')) {
            return true;
        } else if (this.platform.platforms().includes('desktop')) {
            return false;
        }
    }
}
