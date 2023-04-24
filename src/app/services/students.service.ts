import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/student';
  getStudents() {
    return this.http.get<Student[]>(this.url);
  }

  addStudent(student: Student) {
    return this.http.post<Student>(this.url + '/create', student);
  }

  deleteStudent(id: number) {
    return this.http.delete(this.url + '/delete/' + id);
  }

}
