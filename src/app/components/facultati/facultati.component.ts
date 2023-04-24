import {Component, OnInit} from '@angular/core';
import {Student} from "../../model/student";
import {StudentsService} from "../../services/students.service";
import {Facultate} from "../../model/facultate";
import {FacultateService} from "../../services/facultate.service";

@Component({
  selector: 'app-facultati',
  templateUrl: './facultati.component.html',
  styleUrls: ['./facultati.component.css']
})
export class FacultatiComponent implements OnInit{

  facultati: Facultate[];

  constructor(private facultateService: FacultateService) {

  }
  ngOnInit() {
    this.facultateService.getFacultati()
      .subscribe((data: Facultate[]) =>
        this.facultati = data);
  }

  deleteFacultate(id: number) {
    this.facultateService.deleteFacultate(id).subscribe(
      data => this.ngOnInit()
    );
  }


}
