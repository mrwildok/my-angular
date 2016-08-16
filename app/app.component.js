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
                    this.saludo = { name: "your name here" };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'main-danicargon',
                        template: "\n    <a class=\"green\">Button</a>\n    <ul>\n      <li *ngFor=\"#contacts of contacts\">\n        {{contacts.name}} {{contacts.lastname}} : {{contacts.mail}}\n      </li>\n    </ul>\n    <label>\n      Find something\n      <input [(ngModel)]=\"saludo.name\" type=\"text\">\n    </label>\n    <h3>Hi my name is {{saludo.name}}</h3>\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7b0JBQ1MsYUFBUSxHQUFHO3dCQUNoQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUcsUUFBUSxFQUFFLFVBQVUsRUFBRyxJQUFJLEVBQUUsZ0NBQWdDLEVBQUMsRUFBRyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUcsUUFBUSxFQUFFLFNBQVMsRUFBRyxJQUFJLEVBQUUsaUNBQWlDLEVBQUMsRUFBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUcsUUFBUSxFQUFFLFNBQVMsRUFBRyxJQUFJLEVBQUUsK0JBQStCLEVBQUM7cUJBQzVQLENBQUM7b0JBQ0ssV0FBTSxHQUFHLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBdEJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsUUFBUSxFQUFFLHFWQVlUO3dCQUNELFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO3FCQUNwQyxDQUFDOztnQ0FBQTtnQkFNRixtQkFBQztZQUFELENBTEEsQUFLQyxJQUFBO1lBTEQsdUNBS0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21haW4tZGFuaWNhcmdvbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8YSBjbGFzcz1cImdyZWVuXCI+QnV0dG9uPC9hPlxuICAgIDx1bD5cbiAgICAgIDxsaSAqbmdGb3I9XCIjY29udGFjdHMgb2YgY29udGFjdHNcIj5cbiAgICAgICAge3tjb250YWN0cy5uYW1lfX0ge3tjb250YWN0cy5sYXN0bmFtZX19IDoge3tjb250YWN0cy5tYWlsfX1cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8bGFiZWw+XG4gICAgICBGaW5kIHNvbWV0aGluZ1xuICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwic2FsdWRvLm5hbWVcIiB0eXBlPVwidGV4dFwiPlxuICAgIDwvbGFiZWw+XG4gICAgPGgzPkhpIG15IG5hbWUgaXMge3tzYWx1ZG8ubmFtZX19PC9oMz5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogW1wiLi4vc3JjL2Nzcy9hcHAuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHB1YmxpYyBjb250YWN0cyA9IFtcbiAgICB7IG5hbWU6IFwiRGFuaWVsXCIgLCBsYXN0bmFtZTogXCJDw6FyZGVuYXNcIiAsIG1haWw6IFwiZGFuaWVsLmNhcmRlbmFzQGNvbnRyb2xib3gubmV0XCJ9ICwgeyBuYW1lOiBcIlZhbGVudGluYVwiICwgbGFzdG5hbWU6IFwiU2FsYXphclwiICwgbWFpbDogXCJ2YWxlbnRpbmEuc2FsemFyQGNvbnRyb2xib3gubmV0XCJ9ICwgeyBuYW1lOiBcIm1hbnVlbGFcIiAsIGxhc3RuYW1lOiBcIlZpbGxhZGFcIiAsIG1haWw6IFwibWFudWVsLnZpbGFsZGFAY29udHJvbGJveC5uZXRcIn0sXG4gIF07XG4gIHB1YmxpYyBzYWx1ZG8gPSB7bmFtZTogXCJ5b3VyIG5hbWUgaGVyZVwifTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
