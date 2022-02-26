import { Component, OnInit } from '@angular/core';

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.listTasks();
  }

  listTasks(): Task[] {
    return this.taskService.listTasks();
  }

  remove($event: any, task: Task): void {

    $event.preventDefault();

    if(confirm('Do you wish to remove task "' + task.name + '"?')) {
      this.taskService.remove(task.id);
      this.tasks = this.listTasks();
    }

  }

}
