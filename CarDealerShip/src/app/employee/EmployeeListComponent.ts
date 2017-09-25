import { Component } from '@angular/core'

@Component({
    selector: 'employee-list',
    templateUrl: 'app/employee/EmployeeList.component.html'
})
export class EmployeeListComponent {
    employees: any[];
    employee: any;
    carsSold: number;

    selectedRadioButtonValue: string = 'All';

    constructor() {
        this.employees = [
            { name: 'Andy', title: 'Sales', id: 1 },
            { name: 'Robert', title: 'Internet Sales', id: 2 },
            { name: 'Rizwan', title: 'Internet Sales', id: 3 },
            { name: 'Keith', title: 'Manager', id: 4 }
        ]
        this.carsSold = 0;
    }

    // these methods get bind to the employee-count tag/directive
    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalSalesEmployeesCount(): number {
        return this.employees.filter(e=>e.title ==='Sales Man').length;
    }
    getTotalInternetSalesEmployeesCount(): number {
        return this.employees.filter(e => e.title === 'Internet sales man').length; 

        // = assign 
        //== compare 2values.. 
        //=== compare value and type
    }


    loadEmployeeDetail(employee: any): void {
        this.employee = employee;
        this.carsSold = employee.id;
    }

    trackByEmpName(index: number, employee: any): string {
        return employee.name;
    }

    //handle the radio button changed event
    onEmployeeCountRadioButtonChanged(selectedRadtioButtonValue: string): void {

        console.log('change to ' + selectedRadtioButtonValue);
        this.selectedRadioButtonValue = selectedRadtioButtonValue;
    }
}