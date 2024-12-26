import { Routes } from "@angular/router";

export const fullRoutes: Routes = [
    {
        path: 'error-page',
        loadChildren: () => import('../../admin/pages/error-pages/error-pages.module').then(m => m.ErrorPagesModule)
    }
]