import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pop-up',
        loadComponent: () =>
          import('./features/new-deal-popup/new-deal-popup.component').then(
            (component) => component.NewDealPopupComponent,
          ),
      },
];
