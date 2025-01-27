import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './components/data-binding/databinding.component';
import { StucturalDirectiveComponent } from './components/directive/stuctural-directive/stuctural-directive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StucturalDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-18-tutorial';
}
