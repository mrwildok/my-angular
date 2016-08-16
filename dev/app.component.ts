import {Component} from 'angular2/core';

@Component({
    selector: 'main-danicargon',
    template: `
    <a (click)="onSelect()" class="green">Button</a>
    <div *ngIf="showMe === true">
      <p>{{saludo.pregunta}}</p>
    </div>
    <ul>
      <li *ngFor="#contacts of contacts">
        {{contacts.name}} {{contacts.lastname}} : {{contacts.mail}}
      </li>
    </ul>
    <label>
      Find something
      <input [(ngModel)]="saludo.name" type="text">
    </label>
    <h3>Hi my name is {{saludo.name}}</h3>
    `,
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {
  public contacts = [
    { name: "Daniel" , lastname: "Cárdenas" , mail: "daniel.cardenas@controlbox.net"} , { name: "Valentina" , lastname: "Salazar" , mail: "valentina.salzar@controlbox.net"} , { name: "manuela" , lastname: "Villada" , mail: "manuel.vilalda@controlbox.net"},
  ];
  public saludo = {name: "your name here" , pregunta: "Can you see me now?" };

  public showMe = false;

  onSelect() {
    this.showMe = true;
  }
}
