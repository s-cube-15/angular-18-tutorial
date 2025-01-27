import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatabindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-18-tutorial';
}
