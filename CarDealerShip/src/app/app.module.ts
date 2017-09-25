import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { EmployeeListComponent } from './employee/EmployeeListComponent';
import {EmployeeCountComponent } from './employee/employeeCount.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeListComponent, EmployeeCountComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
