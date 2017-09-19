import {Component} from "@angular/core"


@Component({
    selector: 'app',
    template: `<div>
                    <h1>{{DealerShipName }}</h1>
                    <employee-list></employee-list>
               <div>`
   
})

export class AppComponent {

    DealerShipName: string = "Employees";

}

