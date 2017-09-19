import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employeecomponent';
import { EmployeeListComponent } from './employee/EmployeeListComponent';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, EmployeeListComponent, EmployeeComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
