import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentModel } from './student-model';
 

@Injectable()
export class StudentService {

  constructor(private http:HttpClient) { }
isUpdate=1
  student = new StudentModel();


changeForm(student:any){
this.student.Name = student.name;
this.student.Mobile =student.mobile;
this.student.City =student.city;
this.student.Id =student.id;
}


getStudentListfromServer(){
  return this.http.get("https://localhost:44375/api/Student");
}

saveStudent(){
  return this.http.post("https://localhost:44375/api/Student",this.student);
}

updateStudent(student:any){
return this.http.put('https://localhost:44375/api/Student/'+student.Id,student)
}

deleteStudent(student:any){
  return this.http.delete('https://localhost:44375/api/Student/'+student.id)
  }

  resetform(){
  this.isUpdate=1
  this.student.Name = "";
  this.student.Mobile = null;
  this.student.City ="";
  this.student.Id =null;
}


}
