import { Route } from '@angular/router';

import HomePage from './home-page';
import { IconPageComponent } from './icon-page/icon-page.component';

export const appRoutes: Route[] = [
  { path: 'icon', component: IconPageComponent },
  { path: 'home', component: HomePage },
];
