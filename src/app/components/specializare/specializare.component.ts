import {Component, OnInit} from '@angular/core';
import {Student} from "../../model/student";
import {StudentsService} from "../../services/students.service";
import {Specializare} from "../../model/specializare";
import {SpecializareService} from "../../services/specializare.service";

@Component({
  selector: 'app-specializare',
  templateUrl: './specializare.component.html',
  styleUrls: ['./specializare.component.css']
})
export class SpecializareComponent implements OnInit {

  specializari: Specializare[];

  constructor(private specializareService: SpecializareService) {

  }
  ngOnInit() {
    this.specializareService.getSpecializari()
      .subscribe((data: Specializare[]) =>
        this.specializari = data);
  }

  deleteSpecializare(id: number) {
    this.specializareService.deleteSpecializare(id).subscribe(
      data => this.ngOnInit()
    );
  }

}
