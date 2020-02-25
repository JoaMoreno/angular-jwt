import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PublicTaskComponent } from './auth/public-task/public-task.component';
import { PrivateTaskComponent } from './auth/private-task/private-task.component';
import { SinginComponent } from './auth/singin/singin.component';
import { SingupComponent } from './auth/singup/singup.component';

const routes: Routes = [
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {path: 'tasks', component: PublicTaskComponent},
  {path: 'private', component: PrivateTaskComponent},
  {path: 'singin', component: SinginComponent},
  {path: 'singup', component: SingupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
