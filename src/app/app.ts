import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Biography } from './Pages/biography/biography';
import { Experience } from './Pages/experience/experience';
import { Contact } from './Pages/contact/contact';
import { Start } from './Pages/start/start';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Start, Biography, Experience, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('personalWebiste_v2');
}
