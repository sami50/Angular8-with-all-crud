import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private stuService:StudentService) {

   }

  ngOnInit() {
  }

  formSubmit(){
  this.stuService.saveStudent().
  subscribe(data=>{
    debugger 
    alert("Save Succefully")
  },error=>{
    console.log(error)
  })


}

resetform(){
  alert("ffefef")
}

forUpdate(student:any){
  debugger
  this.stuService.updateStudent(student).
  subscribe(data=>{
    debugger
  },error=>{
    debugger
    console.log(error);
  })
}
forDelete(student:any){
  this.stuService.deleteStudent(student).
  subscribe(data=>{
    debugger
  },error=>{
    debugger
    console.log(error);
  })
}

}
