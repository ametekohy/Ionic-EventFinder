import { Component } from '@angular/core';
import {Event} from "../shared/Event";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'app-favorites-events',
  templateUrl: './favorites-events.page.html',
  styleUrls: ['./favorites-events.page.scss'],
})
export class FavoritesEventsPage {
  favorites: Event[];

  constructor(private storage: Storage) {
  }

  ionViewDidEnter() {
    this.getFavorites();
  }

  getFavorites() {
    this.storage.get('favorites').then(
        result => {
          this.favorites = result;
        }
    );
  }

  removeFromFavorites(event: Event) {
    this.storage.get('favorites').then(
        result => {
          if (result.some(e => e.id === event.id)) {
            result = result.filter(obj => obj.id !== event.id);
          }
          this.favorites = this.favorites.filter(obj => obj.id !== event.id);
          this.storage.set('favorites', result);
        }
    );
  }
}
