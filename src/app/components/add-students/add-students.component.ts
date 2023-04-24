import {Component, OnInit} from '@angular/core';
import {Specializare} from "../../model/specializare";
import {Facultate} from "../../model/facultate";
import {SpecializareService} from "../../services/specializare.service";
import {Router} from "@angular/router";
import {FacultateService} from "../../services/facultate.service";
import {StudentsService} from "../../services/students.service";
import {Student} from "../../model/student";

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {

  specializari: Specializare[];
  constructor(private studentService: StudentsService,
              private route: Router,
              private specializareService: SpecializareService) {
  }
  ngOnInit() {
    this.specializareService.getSpecializari()
      .subscribe((data: Specializare[]) =>
        this.specializari = data);
  }
  onClickSubmit(student: Student) {
    this.studentService.addStudent(student).subscribe(
      data => {
        this.route.navigate(['/students']);
      }
    )
  }

}
