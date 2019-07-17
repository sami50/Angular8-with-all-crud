import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList:any 
  constructor(private stuservice:StudentService) { }

  ngOnInit() {
    this.getStudentList();
  }

getStudentList(){
  this.stuservice.getStudentListfromServer().
  subscribe(data=>{
    debugger
    
    this.studentList = data;
  },error=>{
console.log(error)
  })

}
updateBtnClick(student:any){
  this.stuservice.isUpdate=2;
  this.stuservice.changeForm(student)
}


}
