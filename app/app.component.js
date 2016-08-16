System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.contacts = [
                        { name: "Daniel", lastname: "Cárdenas", mail: "daniel.cardenas@controlbox.net" }, { name: "Valentina", lastname: "Salazar", mail: "valentina.salzar@controlbox.net" }, { name: "manuela", lastname: "Villada", mail: "manuel.vilalda@controlbox.net" },
                    ];
                    this.saludo = { name: "your name here", pregunta: "Can you see me now?" };
                    this.showMe = false;
                }
                AppComponent.prototype.onSelect = function () {
                    this.showMe = true;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'main-danicargon',
                        template: "\n    <a (click)=\"onSelect()\" class=\"green\">Button</a>\n    <div *ngIf=\"showMe === true\">\n      <p>{{saludo.pregunta}}</p>\n    </div>\n    <ul>\n      <li *ngFor=\"#contacts of contacts\">\n        {{contacts.name}} {{contacts.lastname}} : {{contacts.mail}}\n      </li>\n    </ul>\n    <label>\n      Find something\n      <input [(ngModel)]=\"saludo.name\" type=\"text\">\n    </label>\n    <h3>Hi my name is {{saludo.name}}</h3>\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQUE7b0JBQ1MsYUFBUSxHQUFHO3dCQUNoQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUcsUUFBUSxFQUFFLFVBQVUsRUFBRyxJQUFJLEVBQUUsZ0NBQWdDLEVBQUMsRUFBRyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUcsUUFBUSxFQUFFLFNBQVMsRUFBRyxJQUFJLEVBQUUsaUNBQWlDLEVBQUMsRUFBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUcsUUFBUSxFQUFFLFNBQVMsRUFBRyxJQUFJLEVBQUUsK0JBQStCLEVBQUM7cUJBQzVQLENBQUM7b0JBQ0ssV0FBTSxHQUFHLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFHLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxDQUFDO29CQUVyRSxXQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUt4QixDQUFDO2dCQUhDLCtCQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLENBQUM7Z0JBOUJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsUUFBUSxFQUFFLCtiQWVUO3dCQUNELFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO3FCQUNwQyxDQUFDOztnQ0FBQTtnQkFZRixtQkFBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsdUNBV0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21haW4tZGFuaWNhcmdvbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8YSAoY2xpY2spPVwib25TZWxlY3QoKVwiIGNsYXNzPVwiZ3JlZW5cIj5CdXR0b248L2E+XG4gICAgPGRpdiAqbmdJZj1cInNob3dNZSA9PT0gdHJ1ZVwiPlxuICAgICAgPHA+e3tzYWx1ZG8ucHJlZ3VudGF9fTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8dWw+XG4gICAgICA8bGkgKm5nRm9yPVwiI2NvbnRhY3RzIG9mIGNvbnRhY3RzXCI+XG4gICAgICAgIHt7Y29udGFjdHMubmFtZX19IHt7Y29udGFjdHMubGFzdG5hbWV9fSA6IHt7Y29udGFjdHMubWFpbH19XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPGxhYmVsPlxuICAgICAgRmluZCBzb21ldGhpbmdcbiAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cInNhbHVkby5uYW1lXCIgdHlwZT1cInRleHRcIj5cbiAgICA8L2xhYmVsPlxuICAgIDxoMz5IaSBteSBuYW1lIGlzIHt7c2FsdWRvLm5hbWV9fTwvaDM+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFtcIi4uL3NyYy9jc3MvYXBwLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBwdWJsaWMgY29udGFjdHMgPSBbXG4gICAgeyBuYW1lOiBcIkRhbmllbFwiICwgbGFzdG5hbWU6IFwiQ8OhcmRlbmFzXCIgLCBtYWlsOiBcImRhbmllbC5jYXJkZW5hc0Bjb250cm9sYm94Lm5ldFwifSAsIHsgbmFtZTogXCJWYWxlbnRpbmFcIiAsIGxhc3RuYW1lOiBcIlNhbGF6YXJcIiAsIG1haWw6IFwidmFsZW50aW5hLnNhbHphckBjb250cm9sYm94Lm5ldFwifSAsIHsgbmFtZTogXCJtYW51ZWxhXCIgLCBsYXN0bmFtZTogXCJWaWxsYWRhXCIgLCBtYWlsOiBcIm1hbnVlbC52aWxhbGRhQGNvbnRyb2xib3gubmV0XCJ9LFxuICBdO1xuICBwdWJsaWMgc2FsdWRvID0ge25hbWU6IFwieW91ciBuYW1lIGhlcmVcIiAsIHByZWd1bnRhOiBcIkNhbiB5b3Ugc2VlIG1lIG5vdz9cIiB9O1xuXG4gIHB1YmxpYyBzaG93TWUgPSBmYWxzZTtcblxuICBvblNlbGVjdCgpIHtcbiAgICB0aGlzLnNob3dNZSA9IHRydWU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
