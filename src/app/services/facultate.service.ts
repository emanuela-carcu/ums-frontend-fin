import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Facultate} from "../model/facultate";

@Injectable({
  providedIn: 'root'
})
export class FacultateService {
  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/facultate';
  getFacultati() {
    return this.http.get<Facultate[]>(this.url);
  }

  addFacultate(facultate: Facultate) {
    return this.http.post<Facultate>(this.url + '/create', facultate);
  }

  deleteFacultate(id: number) {
    return this.http.delete(this.url + '/delete/' + id);
  }

}
