import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { PrivateTaskComponent } from './private-task/private-task.component';
import { PublicTaskComponent } from './public-task/public-task.component';

// Services
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    SinginComponent, 
    SingupComponent, 
    PrivateTaskComponent, 
    PublicTaskComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SinginComponent, 
    SingupComponent, 
    PrivateTaskComponent, 
    PublicTaskComponent,],
    providers:[
      AuthService
    ]
})
export class AuthModule { }
