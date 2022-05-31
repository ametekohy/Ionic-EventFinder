import { Injectable } from '@angular/core';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  locationPermission: boolean;

  constructor(private android: AndroidPermissions) {
    this.checkPermissionLocation();
  }

  checkPermissionLocation() {
    this.android.checkPermission(this.android.PERMISSION.ACCESS_FINE_LOCATION).then(
        result => {
          this.locationPermission = result.hasPermission;
        }
    );

    return this.locationPermission;
  }

  requestPermissionLocation() {
    this.android.requestPermission(this.android.PERMISSION.ACCESS_FINE_LOCATION);
  }


}
