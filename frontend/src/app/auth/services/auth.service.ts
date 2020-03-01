import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  // Cambiar por variable de entorno url del backend
  private URL = "http://localhost:4100/api";

  constructor(private http: HttpClient, private router: Router) {}

  singUp(user) {
    // Generar interface de singup
    return this.http.post<any>(this.URL + "/singup", user);
  }

  singIn(user) {
    // Generar interface de singup
    return this.http.post<any>(this.URL + "/singin", user);
  }

  loggedIn(): Boolean {
    // !! el doble signo de interrogacion actua como if()
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/tasks']);
  }

}
