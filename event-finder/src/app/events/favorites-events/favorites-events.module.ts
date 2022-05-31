import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FavoritesEventsPage } from './favorites-events.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritesEventsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FavoritesEventsPage]
})
export class FavoritesEventsPageModule {}
