import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ThemeService} from '../shared/theme.service';
import {PlatformService} from '../shared/platform.service';
import {PermissionsService} from './permissions/permissions.service';

const themes = {
    autumn: {
        primary: '#F78154',
        secondary: '#4D9078',
        tertiary: '#B4436C',
        light: '#FDE8DF',
        medium: '#FCD0A2',
        dark: '#B89876'
    },
    night: {
        primary: '#8CBA80',
        secondary: '#FCFF6C',
        tertiary: '#FE5F55',
        medium: '#BCC2C7',
        dark: '#F7F7FF',
        light: '#495867'
    },
    neon: {
        primary: '#39BFBD',
        secondary: '#4CE0B3',
        tertiary: '#FF5E79',
        light: '#F4EDF2',
        medium: '#B682A5',
        dark: '#34162A'
    }
};

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit, OnChanges {
    locationPermission: boolean;
    isMobile: boolean;

    constructor(private theme: ThemeService, private permissionsService: PermissionsService, private platform: PlatformService) {
    }

    ngOnInit() {
        if (this.platform.isMobile()) {
            this.locationPermission = this.permissionsService.checkPermissionLocation();
            this.isMobile = this.platform.isMobile();
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.locationPermission = this.permissionsService.checkPermissionLocation();
    }

    changeTheme(name) {
        this.theme.setTheme(themes[name]);
    }
}
