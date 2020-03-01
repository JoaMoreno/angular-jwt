import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  // Cambiar por variable de entorno url backend
  private URL = 'http://localhost:4100/api'

  constructor(
    private http: HttpClient
  ) { }

  // Crear interface para tasks
  getPublicTasks(){
    return this.http.get<any>(this.URL+'/public-tasks')
  }
  getPrivateTasks(){
    return this.http.get<any>(this.URL+'/private-tasks')
  }


}
