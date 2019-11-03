import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
  
  public tasks:Array<Task> = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.subscribeTaskService();
    this.taskService.getTasks();
  }

  subscribeTaskService(){
    this.taskService.task.subscribe(sub=>{
      this.tasks = sub;
    });
  }

}
