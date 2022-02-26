import { Routes } from '@angular/router';

import { ListTaskComponent } from './list';
import { NewTaskComponent } from './create';
import { EditTaskComponent } from './edit';

export const TaskRoutes: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list'
    },
    {
        path: 'tasks/list',
        component: ListTaskComponent
    },
    {
        path: 'tasks/create-task',
        component: NewTaskComponent
    },
    {
        path: 'tasks/edit/:id',
        component: EditTaskComponent
    }
];
