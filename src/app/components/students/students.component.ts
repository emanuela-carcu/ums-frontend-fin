import {Component, OnInit} from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from '../../model/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentsService) {

  }
  ngOnInit() {
    this.studentService.getStudents()
    .subscribe((data: Student[]) =>
      this.students = data);
  }


  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(
      data => this.ngOnInit()
    );
  }

}
