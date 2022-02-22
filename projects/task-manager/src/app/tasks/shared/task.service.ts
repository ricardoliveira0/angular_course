import { Injectable } from '@angular/core';

import { Task } from './';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  listTasks(): Task[] {
    const tasks = localStorage['tasks'];
    return tasks ? JSON.parse(tasks) : [];
  }
  
  createTask(task: Task): void {
    const tasks = this.listTasks();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  findByID(id: number): Task {
    const tasks: Task[] = this.listTasks();
    return tasks.find(task => task.id === id);
  }

  update(task: Task): void {

    const tasks: Task[] = this.listTasks();

    tasks.forEach((obj, index, objs) => {

      if(task.id === obj.id) {
        objs[index] = task;
      }
      
    });

    localStorage['tasks'] = JSON.stringify(tasks);

  }

  remove(id: number): void {
    let tasks: Task[] = this.listTasks();
    tasks = tasks.filter(task => task.id !== id);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  updateStatus(id: number): void {

    const tasks: Task[] = this.listTasks();

    tasks.forEach((obj, index, objs) => {

      if(id === obj.id) {
        objs[index].done = !obj.done;
      }
      
    });

    localStorage['tasks'] = JSON.stringify(tasks);

  }

}
