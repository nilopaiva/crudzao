import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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

  addTask(t, d){
    this.taskService.addTask(t, d);
  }

}
