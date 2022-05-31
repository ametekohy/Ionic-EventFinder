import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';
import {Storage} from '@ionic/storage';

describe('ThemeService', () => {
  let documentSpy: jasmine.SpyObj<Document>;
  let storageSpy: jasmine.SpyObj<Storage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Document,
          useValue: documentSpy
        },
        {
          provide: Storage,
          useValue: storageSpy
        }
      ]
    });

    documentSpy = TestBed.get(Document);
    storageSpy = TestBed.get(Storage);
  });

  it('should be created', () => {
    const service: ThemeService = TestBed.get(ThemeService);
    expect(service).toBeTruthy();
  });
});
