import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FacultatiComponent } from './components/facultati/facultati.component';
import { SpecializareComponent } from './components/specializare/specializare.component';
import { AddFacultateComponent } from './components/add-facultate/add-facultate.component';
import { FormsModule } from '@angular/forms';
import { AddSpecializareComponent } from './components/add-specializare/add-specializare.component';
import { LoginComponent } from './components/login/login.component';
import {authInterceptorProviders} from "./components/helper/auth.interceptor";
import { RegisterComponent } from './components/register/register.component';
import { AddStudentsComponent } from './components/add-students/add-students.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'facultati', component: FacultatiComponent },
  { path: 'specializari', component: SpecializareComponent },
  { path: 'add-facultate', component: AddFacultateComponent },
  { path: 'add-specializare', component: AddSpecializareComponent},
  { path: 'add-students', component: AddStudentsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    NavbarComponent,
    FacultatiComponent,
    SpecializareComponent,
    AddFacultateComponent,
    AddSpecializareComponent,
    LoginComponent,
    RegisterComponent,
    AddStudentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
