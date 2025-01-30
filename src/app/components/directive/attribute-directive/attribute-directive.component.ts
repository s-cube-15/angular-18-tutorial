import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css',
})
export class AttributeDirectiveComponent {
  div1BgColor = 'bg-warning';
  isdiv2Toggler = false;
  changeToGreen() {
    this.div1BgColor = 'bg-success';
  }
  changeToRed() {
    this.div1BgColor = 'bg-danger';
  }
  buttonToggler() {
    this.isdiv2Toggler = !this.isdiv2Toggler;
  }
  customerStyle = {
    color: 'white',
    'background-color': 'red',
    width: '200px',
    height: '200px',
    'text-align': 'center',
    'border-radius': '50%',
    'align-items': 'center',
    display: 'flex',
    'justify-content': 'center',
  };

  // Previous Video
  isDivVisible = false;
  isToggle = true;
  num1 = '';
  num2 = '';
  isActive = false;
  selectedState = '';
  cityArray = ['Mumbai', 'Pune', 'NaviMumbai', 'Thane'];
  studentList = [
    {
      sid: 1,
      totalmarks: 23,
      gender: 'Male',
      name: 'AAA',
      city: 'Mumbai',
      isActive: true,
    },
    {
      sid: 2,
      totalmarks: 53,
      gender: 'Female',
      name: 'BBB',
      city: 'Pune  ',
      isActive: false,
    },
    {
      sid: 3,
      totalmarks: 33,
      gender: 'Male',
      name: 'CCC',
      city: 'Nashik',
      isActive: true,
    },
    {
      sid: 4,
      totalmarks: 83,
      gender: 'Female',
      name: 'DDD',
      city: 'Delhi ',
      isActive: false,
    },
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
