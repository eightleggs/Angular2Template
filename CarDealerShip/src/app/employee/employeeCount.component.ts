import { Component, Input, Output, EventEmitter } from '@angular/core';
//include Input to decorate variables as inputs
//include Output and event emitter so when radios are clicked you pass the event and selection to parent

@Component(
    {
        selector: 'employee-count',
        templateUrl: 'app/employee/employeeCount.component.html'
    }
)

export class EmployeeCountComponent {

    selectedRadoButtonValue: string = "All";

    @Input()
    all: number;   //this is an input

    @Input()
    sales: number;

    @Input()
    internetSales: number;

    @Output()
    countRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>(); //custom event, take a string

    onRadioButtonSelectionChange() {
        this.countRadioButtonChanged.emit(this.selectedRadoButtonValue); //raise the custom event with selected radio button value
        console.log(this.selectedRadoButtonValue);
    }
}