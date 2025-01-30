import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export class ControlFlowComponent {
  isDivVisible =false;
  isToggle = true;
  num1 = '';
  num2 = '';
  dayOfWeek= '';
  isActive = false;
  selectedState = '';
  cityArray = ['Mumbai', 'Pune', 'NaviMumbai', 'Thane'];
  studentList = [
    { sid: 1, name: 'AAA', city: 'Mumbai', isActive: 'truee' },
    { sid: 2, name: 'BBB', city: 'Pune  ', isActive: 'false' },
    { sid: 3, name: 'CCC', city: 'Nashik', isActive: 'false' },
    { sid: 4, name: 'DDD', city: 'Delhi ', isActive: 'false' },
  ];

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
