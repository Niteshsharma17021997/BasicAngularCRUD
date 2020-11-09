import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { Employee } from '../Model/Employee';
import { EmployeePersonal } from '../Model/EmployeePersonal';
import { HttpCallsService } from '../Service/http-calls.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private http: HttpCallsService) { }
  showEmployee: boolean;
  ngOnInit(): void {
    this.showEmployee = false
  }

  FetchEmployee()
  {
      this.http.FetchEmployees().subscribe(data => this.ShowData(data));
  }

  employeeData: Employee;
  ShowData(data: Employee)
  {
    console.log(data);
    this.employeeData = data;
    this.showEmployee = true;
  }
}
