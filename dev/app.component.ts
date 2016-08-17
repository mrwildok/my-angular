import {Component} from 'angular2/core';
import {ContactListComponent} from "./elements/contact-list.component";

@Component({
    selector: 'main-danicargon',
    template: `
    <a (click)="onSelect()" class="green">Button</a>
    <div>
      <p>{{selectedContact.name}}</p>
    </div>
    <ul>
      <li *ngFor="#contacts of contacts" (click)="onSelect(contacts)" >
        {{contacts.name}} {{contacts.lastname}} : {{contacts.mail}}
      </li>
    </ul>
    <label>
      Find something
      <input [(ngModel)]="selectedContact.mail" type="text">
    </label>
    <h3>Hi my name is {{saludo.name}}</h3>
    `,
    directives: [ContactListComponent],
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {

}
