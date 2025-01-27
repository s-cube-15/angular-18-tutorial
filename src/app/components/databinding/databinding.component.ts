import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css',
})
export class DatabindingComponent {
  courseName: string = 'Angular 18';
  inputType = 'checkbox';
  rollno = 123;
  corname = 'col - 4 bg-success';
  isIndian = false;
  firstName = signal("Sudhanshu");
  constructor() {}
  salert(name: string) {
    alert(name);
  }
  changeCourseName() {
    this.courseName = "ReactJS"
    this.firstName.set("Sarvesh")
  }
}
