import { Component } from '@angular/core'

@Component({
    selector: 'employee-list',
    templateUrl: 'app/employee/EmployeeList.component.html'
})
export class EmployeeListComponent {
    employees: any[];

    constructor() {
        this.employees = [{ name: 'Andy', title: 'Sales Man' }, { name: 'Robert', title: 'Internet sales man' }];
    }


    getEmployees(): void {
        this.employees = [
            { name: 'Andy', title: 'Sales Man' },
            { name: 'Robert', title: 'Internet sales man' },
            { name: 'Rizwan', title: 'Internet sales man' }
        ]
    }

    loadEmployeeDetail(): void {
        console.log('load employee');
    }

    trackByEmpName(index: number, employee: any): string {
        return employee.name;
    }
}