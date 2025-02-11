import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'articles', pathMatch: 'full' },
    { path: 'articles', loadComponent: () => import('./article/article.component').then(m => m.ArticleComponent) }
];
