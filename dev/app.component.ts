import {Component} from 'angular2/core';

@Component({
    selector: 'main-danicargon',
    template: `
    <ul>
      <li *ngFor="#contacts of contacts">
        {{contacts.name}} {{contacts.lastname}} : {{contacts.mail}}
      </li>
    </ul>
    `,
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {
  public contacts = [
    { name: "Daniel" , lastname: "Cárdenas" , mail: "daniel.cardenas@controlbox.net"} , { name: "Valentina" , lastname: "Salazar" , mail: "valentina.salzar@controlbox.net"} , { name: "manuela" , lastname: "Villada" , mail: "manuel.vilalda@controlbox.net"},
  ];
}
