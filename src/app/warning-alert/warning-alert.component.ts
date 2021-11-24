import { Component } from "@angular/core";

@Component({
    selector:'app-warning-component',
    templateUrl:'./warning-alert.component.html',
    styles:[`
            h5{
                color: black;
                background: orangered;
                width: 50vw;
                padding: 2rem;
                font-weight: bolder;
                box-shadow: 1px 1px 6px 2px inset maroon;
            }`]
})
export class WarningAlertComponent{

}