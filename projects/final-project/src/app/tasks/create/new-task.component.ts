import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TaskService, Task } from '../shared'; 

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  @ViewChild('taskForm', { static: true }) taskForm: NgForm;
  task: Task;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.task = new Task();
  }

  create(): void {

    if (this.taskForm.form.valid) {
      this.taskService.createTask(this.task);
      this.router.navigate(["/tarefas"]);
    }
    
  }

}
