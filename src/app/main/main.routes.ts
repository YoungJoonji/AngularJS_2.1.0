import { Routes } from '@angular/router';

import { MainComponent } from './index';

import { LoginComponent } from './login/index';
import { LogoutComponent } from './logout/index';

export const mainRoutes: Routes = [
    { path: 'main', component: MainComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'logout', component: LogoutComponent }
        ]
    }
];
