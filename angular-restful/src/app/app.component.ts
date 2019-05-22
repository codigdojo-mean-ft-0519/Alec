import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Title = 'Restful Tasks API';
  tasks: Task[];
  newTask: Task = new Task();
  selectedTask: Task;
  toggleEddit: boolean = false;
  constructor(private taskService: TaskService) {
  }
  ngOnInit() {
    this.getTasksFromService();
  }
  getTasksFromService() {
    const observable: Observable<Task[]> = this.taskService.getTasks();
    observable.subscribe(data => {
      this.tasks = data;
      console.log('we got this', this.tasks);
    });
  }
  showTask(id: string) {
    console.log(`this is our id from componets ${id}`);
    this.taskService.getTask(id).subscribe(task => {
      console.log(task);
      this.selectedTask = task;
    });
  }
  onSubmit() {
    const observable = this.taskService.createTask(this.newTask);
    observable.subscribe(data => {
      console.log('got POST data back', data);
      this.newTask = new Task();
      this.getTasksFromService();
    });
  }
  onDelete(task: string): void {
    this.taskService.deleteTask(task).subscribe(deletedTask => {
      this.tasks = this.tasks.filter( taskFromArray => taskFromArray.id !== deletedTask.id);
      this.getTasksFromService();
    });
  }
  editForm(task: Task) {
    this.selectedTask = this.selectedTask === task ? null : task;
    this.toggleEddit = true;
  }
  onEdit() {
    this.taskService.editTask(this.selectedTask).subscribe(editedTask => {
      console.log(`deleted book: ${editedTask}`);
      this.selectedTask = null;
      this.getTasksFromService();
    });
  }
}
