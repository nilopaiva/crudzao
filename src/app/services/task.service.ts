import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public task = new BehaviorSubject([]);
  public tasks: Array<Task>;
  constructor() { 
    
  }

  getTasks(){
   this.tasks = JSON.parse(localStorage.getItem("list")).tasks;
   this.task.next(this.tasks);
  }

  addTask(title, description){
    let task = {"title": title, "description": description}
    this.tasks = JSON.parse(localStorage.getItem("list")).tasks
    this.tasks.push(task);
    localStorage.setItem("list", '{"tasks":' + JSON.stringify(this.tasks) + '}')
    this.task.next(this.tasks);
  }
}

