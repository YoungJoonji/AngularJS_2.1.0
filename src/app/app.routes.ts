import { Routes } from '@angular/router';

import { IntroComponent } from './intro/index';
import { MainComponent } from './main/index';

import { mainRoutes } from './main/main.routes';

export const appRoutes: Routes = [
    { path: '', component: IntroComponent },
    { path: 'main', component: MainComponent },
    ...mainRoutes
];
