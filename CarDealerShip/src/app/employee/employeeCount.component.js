"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//include Input to decorate variables as inputs
//include Output and event emitter so when radios are clicked you pass the event and selection to parent
var EmployeeCountComponent = (function () {
    function EmployeeCountComponent() {
        this.selectedRadoButtonValue = "All";
        this.countRadioButtonChanged = new core_1.EventEmitter(); //custom event, take a string
    }
    EmployeeCountComponent.prototype.onRadioButtonSelectionChange = function () {
        this.countRadioButtonChanged.emit(this.selectedRadoButtonValue); //raise the custom event with selected radio button value
        console.log(this.selectedRadoButtonValue);
    };
    return EmployeeCountComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EmployeeCountComponent.prototype, "all", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EmployeeCountComponent.prototype, "sales", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EmployeeCountComponent.prototype, "internetSales", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], EmployeeCountComponent.prototype, "countRadioButtonChanged", void 0);
EmployeeCountComponent = __decorate([
    core_1.Component({
        selector: 'employee-count',
        templateUrl: 'app/employee/employeeCount.component.html'
    })
], EmployeeCountComponent);
exports.EmployeeCountComponent = EmployeeCountComponent;
//# sourceMappingURL=employeeCount.component.js.map