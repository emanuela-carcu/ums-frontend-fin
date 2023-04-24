import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../model/student";
import {Specializare} from "../model/specializare";
import {Facultate} from "../model/facultate";

@Injectable({
  providedIn: 'root'
})
export class SpecializareService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/specializare';
  getSpecializari() {
    return this.http.get<Specializare[]>(this.url);
  }

  addSpecializare(specializare: Specializare) {
    return this.http.post<Specializare>(this.url + '/create', specializare);
  }
  deleteSpecializare(id: number) {
    return this.http.delete(this.url + '/delete/' + id);
  }
}
