import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Storage} from '@ionic/storage';
import {FavoritesEventsPage} from './favorites-events.page';

describe('FavoritesEventsPage', () => {
    let component: FavoritesEventsPage;
    let fixture: ComponentFixture<FavoritesEventsPage>;
    let storageSpy: jasmine.SpyObj<Storage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [FavoritesEventsPage],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                providers: [
                    {
                        provide: Storage,
                        useValue: storageSpy
                    }
                ]
        })
        .compileComponents();

        storageSpy = TestBed.get(Storage);
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(FavoritesEventsPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
