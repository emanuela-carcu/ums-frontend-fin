import {Component, OnInit} from '@angular/core';
import {FacultateService} from "../../services/facultate.service";
import {Router} from "@angular/router";
import {Facultate} from "../../model/facultate";
import {SpecializareService} from "../../services/specializare.service";
import {Specializare} from "../../model/specializare";

@Component({
  selector: 'app-add-specializare',
  templateUrl: './add-specializare.component.html',
  styleUrls: ['./add-specializare.component.css']
})
export class AddSpecializareComponent implements OnInit{

  facultati: Facultate[];
  constructor(private specializareService: SpecializareService,
              private route: Router,
              private facultateService: FacultateService) {
  }

  ngOnInit() {
    this.facultateService.getFacultati()
      .subscribe((data: Facultate[]) =>
        this.facultati = data);
  }


  onClickSubmit(specializare: Specializare) {
    this.specializareService.addSpecializare(specializare).subscribe(
      data => {
        this.route.navigate(['/specializari']);
      }
    )
  }
}
