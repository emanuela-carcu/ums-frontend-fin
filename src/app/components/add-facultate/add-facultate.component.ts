import { Component } from '@angular/core';
import {FacultateService} from "../../services/facultate.service";
import {Facultate} from "../../model/facultate";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-facultate',
  templateUrl: './add-facultate.component.html',
  styleUrls: ['./add-facultate.component.css']
})
export class AddFacultateComponent {

  constructor(private facultateService: FacultateService,
              private route: Router) {
  }

  onClickSubmit(facultate: Facultate) {
    this.facultateService.addFacultate(facultate).subscribe(
      data => {
        this.route.navigate(['/facultati']);
      }
    )
  }

}
