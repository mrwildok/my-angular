import {Component} from 'angular2/core';

@Component({
  selector:'contact-list',
  template:`
  <ul>
    <li *ngFor="#contacts of contacts" (click)="onSelect(contacts)" >
      {{contacts.name}} {{contacts.lastname}} : {{contacts.mail}}
    </li>
  </ul>
  `
)}

export class ContactListComponent {
  public contacts = [
    { name: "Daniel" , lastname: "Cárdenas" , mail: "daniel.cardenas@controlbox.net"} , { name: "Valentina" , lastname: "Salazar" , mail: "valentina.salzar@controlbox.net"} , { name: "manuela" , lastname: "Villada" , mail: "manuel.vilalda@controlbox.net"},
  ];
  public saludo = {name: "your name here" , pregunta: "Can you see me now?" };

  public showMe = false;

  public selectedContact = {};

  onSelect() {
    this.showMe = true;
  }
  onSelect(contacts) {
    this.selectedContact = contacts;
  }
}
