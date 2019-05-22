import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from './task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) {
    this.getTasks();
  }
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/tasks');
  }
  getTask(id: string): Observable<Task> {
    console.log(`this is the id: ${id}`);
    return this.http.get<Task>(`/tasks/${id}`);
  }
  createTask(newTask) {
    return this.http.post('/tasks', newTask);
  }
  editTask(editTask: Task): Observable<Task> {
    console.log('edit task' , editTask);
    return this.http.put<Task>(`/tasks/update/${editTask.id}`, editTask);
  }
  deleteTask(task: string): Observable<Task> {
    console.log(`deleted:  ${task}`);
    return this.http.delete<Task>(`/tasks/delete/${task}`);
  }
}
