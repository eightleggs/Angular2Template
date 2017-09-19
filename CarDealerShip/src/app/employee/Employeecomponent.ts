import { Component } from '@angular/core'

@Component({
    selector: 'employee',
    templateUrl: 'app/employee/Employee.component.html'
})
export class EmployeeComponent {
    FullName: string = 'Andy Wang';
    Title: string = "Sales";

    loadEmployeeDetail(): void {
        console.log('load employee ' + this.FullName);
    }
}