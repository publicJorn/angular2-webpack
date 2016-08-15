import { Routes } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';

// import { load } from './shared';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];
