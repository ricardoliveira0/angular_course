import { Routes } from '@angular/router';

import { ListTaskComponent } from './list';

export const TaskRoutes: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list'
    },
    {
        path: 'tasks/list',
        component: ListTaskComponent
    }
];
