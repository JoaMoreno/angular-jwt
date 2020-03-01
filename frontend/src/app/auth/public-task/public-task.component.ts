import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-public-task',
  templateUrl: './public-task.component.html',
  styleUrls: ['./public-task.component.css']
})
export class PublicTaskComponent implements OnInit {

  tasks: any = [];

  constructor(
    private taskService: TasksService
  ) { }

  ngOnInit(): void {
    this.taskService.getPublicTasks()
      .subscribe(
        res => {
          console.log(res);
          this.tasks = res;
        },
        err => console.log(err)
      )
  }

}
