import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationPageComponent } from './Components/registration-page/registration-page.component';
import { TodoPageComponent } from './Component/todo-page/todo-page.component';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegistrationPageComponent,TodoPageComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sai';
}
