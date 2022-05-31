import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'featured',
        children: [
          {
            path: '',
            loadChildren: '../events/featured-event/featured-event.module#FeaturedPageModule'
          }
        ]
      },
      {
        path: 'event-list-event/:id',
        loadChildren: '../events/event-list-event/event-list-event.module#EventListEventPageModule'
      },
      {
        path: 'findnearby',
        children: [
          {
            path: '',
            loadChildren: '../events/event-list-artists/event-list-artists.module#EventListArtistsPageModule'
          }
        ]
      },
      {
        path: 'favorites',
        children: [
          {
            path: '',
            loadChildren: '../events/favorites-events/favorites-events-page.module#FavoritesEventsPageModule'
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: '../settings/settings.module#SettingsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/featured',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/featured',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
