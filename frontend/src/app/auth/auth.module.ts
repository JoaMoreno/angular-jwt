import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { PrivateTaskComponent } from './private-task/private-task.component';
import { PublicTaskComponent } from './public-task/public-task.component';



@NgModule({
  declarations: [
    SinginComponent, 
    SingupComponent, 
    PrivateTaskComponent, 
    PublicTaskComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SinginComponent, 
    SingupComponent, 
    PrivateTaskComponent, 
    PublicTaskComponent,]
})
export class AuthModule { }
