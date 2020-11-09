import { Injectable } from '@angular/core';
import { EmployeePersonal } from '../Model/EmployeePersonal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrganizationRecord } from '../Model/OrganizationRecord';
import { Employee } from '../Model/Employee';

@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {

  constructor( private http: HttpClient) { }

  ValidateLoginCredentials(email: string, pass: string): Observable<OrganizationRecord>
  {
    var employeeP: EmployeePersonal = {EmployeeId:0, Name:'', Fname: '', Address: '', DOB: '', PAN: '', Phone: '', 
                                          Email: email, Pass: pass };
    return this.http.post<OrganizationRecord>('https://localhost:44382/api/LoginValidation/validateCredentials', employeeP);
  }

  FetchEmployees(): Observable<Employee>
  {
    return this.http.get<Employee>('https://localhost:44382/api/EmployeeManagement/fetchEmployee');
  }
}
