import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { ApiService} from '../../serives/api.service'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formObj : Student = new Student();
  constructor(
    private apiService:ApiService
  ) { }

  ngOnInit(): void {
  }

  onSubmitSignup(){
    console.log(this.formObj);
    let url = 'students'
    this.apiService.postRequest(url, this.formObj)
    .subscribe((res)=>{
      console.log(res);
      this.formObj = new Student();
    })
  }

}
