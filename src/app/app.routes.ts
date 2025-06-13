import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'login',
        loadComponent: () => import('./auth/components/login/login').then(m => m.Login)
    },
    {
        path: 'home',
        loadComponent: () => import('./components/homes/home/home').then(m => m.Home),
        canActivate: [() => import('./auth/auth-guard').then(m => m.AuthGuard)]
    }
];
