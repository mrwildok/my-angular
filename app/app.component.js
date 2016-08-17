System.register(['angular2/core', "./elements/contact-list.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'main-danicargon',
                        template: "\n    <a (click)=\"onSelect()\" class=\"green\">Button</a>\n    <div>\n      <p>{{selectedContact.name}}</p>\n    </div>\n    <ul>\n      <li *ngFor=\"#contacts of contacts\" (click)=\"onSelect(contacts)\" >\n        {{contacts.name}} {{contacts.lastname}} : {{contacts.mail}}\n      </li>\n    </ul>\n    <label>\n      Find something\n      <input [(ngModel)]=\"selectedContact.mail\" type=\"text\">\n    </label>\n    <h3>Hi my name is {{saludo.name}}</h3>\n    ",
                        directives: [contact_list_component_1.ContactListComponent],
                        styleUrls: ["../src/css/app.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF2QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixRQUFRLEVBQUUsbWRBZVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsNkNBQW9CLENBQUM7d0JBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO3FCQUNwQyxDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDb250YWN0TGlzdENvbXBvbmVudH0gZnJvbSBcIi4vZWxlbWVudHMvY29udGFjdC1saXN0LmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21haW4tZGFuaWNhcmdvbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8YSAoY2xpY2spPVwib25TZWxlY3QoKVwiIGNsYXNzPVwiZ3JlZW5cIj5CdXR0b248L2E+XG4gICAgPGRpdj5cbiAgICAgIDxwPnt7c2VsZWN0ZWRDb250YWN0Lm5hbWV9fTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8dWw+XG4gICAgICA8bGkgKm5nRm9yPVwiI2NvbnRhY3RzIG9mIGNvbnRhY3RzXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGNvbnRhY3RzKVwiID5cbiAgICAgICAge3tjb250YWN0cy5uYW1lfX0ge3tjb250YWN0cy5sYXN0bmFtZX19IDoge3tjb250YWN0cy5tYWlsfX1cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8bGFiZWw+XG4gICAgICBGaW5kIHNvbWV0aGluZ1xuICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwic2VsZWN0ZWRDb250YWN0Lm1haWxcIiB0eXBlPVwidGV4dFwiPlxuICAgIDwvbGFiZWw+XG4gICAgPGgzPkhpIG15IG5hbWUgaXMge3tzYWx1ZG8ubmFtZX19PC9oMz5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtDb250YWN0TGlzdENvbXBvbmVudF0sXG4gICAgc3R5bGVVcmxzOiBbXCIuLi9zcmMvY3NzL2FwcC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
