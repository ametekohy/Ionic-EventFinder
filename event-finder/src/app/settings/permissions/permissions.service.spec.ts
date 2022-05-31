import { TestBed } from '@angular/core/testing';

import { PermissionsService } from './permissions.service';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';

describe('PermissionsService', () => {
  let androidPermissionsSpy: jasmine.SpyObj<AndroidPermissions>;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: AndroidPermissions,
        useValue: androidPermissionsSpy
      }
    ]
  }));

  androidPermissionsSpy = TestBed.get(AndroidPermissions);

  it('should be created', () => {
    const service: PermissionsService = TestBed.get(PermissionsService);
    expect(service).toBeTruthy();
  });
});
