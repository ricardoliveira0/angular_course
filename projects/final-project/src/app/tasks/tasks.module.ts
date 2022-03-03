import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService, TaskDoneDirective } from './shared';
import { ListTaskComponent } from './list';
import { NewTaskComponent } from './create';
import { EditTaskComponent } from './edit';

@NgModule({
  declarations: [
    ListTaskComponent,
    NewTaskComponent,
    EditTaskComponent,
    TaskDoneDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
