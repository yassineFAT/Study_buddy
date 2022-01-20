import { Routes } from '@angular/router';

import { RegisterComponent } from '../../auth_pages/register/register.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'register',    component: RegisterComponent }
];
