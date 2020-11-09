import { EmployeePersonal } from './EmployeePersonal';
import { OrganizationRecord } from './OrganizationRecord';

export interface Employee
{
    employeePersonal: EmployeePersonal;
    organizationRecord: OrganizationRecord;
}