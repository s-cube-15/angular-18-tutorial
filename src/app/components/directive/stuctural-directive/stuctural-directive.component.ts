import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stuctural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stuctural-directive.component.html',
  styleUrl: './stuctural-directive.component.css',
})
export class StucturalDirectiveComponent {
 
  isDivVisible = false;
  isToggle = true;
  num1 = '';
  num2 = '';
  isActive = false;
  selectedState = '';
  cityArray = ['Mumbai', 'Pune', 'NaviMumbai', 'Thane'];
  studentList = [
    { sid: 1, name: 'AAA', city: 'Mumbai', isActive: 'truee' },
    { sid: 2, name: 'BBB', city: 'Pune  ', isActive: 'false' },
    { sid: 3, name: 'CCC', city: 'Nashik', isActive: 'false' },
    { sid: 4, name: 'DDD', city: 'Delhi ', isActive: 'false' },
  ];

  constructor(private router: Router) {
  
}
  goToAttribute() {
  this.router.navigateByUrl("/attribute-directive")
  }
  
  buttonShow() {
    this.isDivVisible = true;
  }
  buttonHide() {
    this.isDivVisible = false;
  }
  buttonToggle() {
    this.isToggle = !this.isToggle;
  }
}
