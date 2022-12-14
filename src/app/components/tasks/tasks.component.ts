import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskServise: TaskService
  ) { }

  ngOnInit():void {
    //Like promise
    this.taskServise.getTasks().subscribe((tasks) => {
      this.tasks = tasks
    });
  }

  deleteTask(task:Task) {
    this.taskServise.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t )=> {return t.id !== task.id})
    })
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskServise.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task) {
    this.taskServise.addTask(task).subscribe((task) => {
      this.tasks.push(task)
    })
  }
}
