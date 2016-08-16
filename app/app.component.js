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
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'main-danicargon',
                        template: "\n    <ul>\n      <li *ngFor=\"#contacts of contacts\">\n        {{contacts.name}} {{contacts.lastname}} : {{contacts.mail}}\n      </li>\n    </ul>\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBQTtvQkFDUyxhQUFRLEdBQUc7d0JBQ2hCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRyxRQUFRLEVBQUUsVUFBVSxFQUFHLElBQUksRUFBRSxnQ0FBZ0MsRUFBQyxFQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRyxRQUFRLEVBQUUsU0FBUyxFQUFHLElBQUksRUFBRSxpQ0FBaUMsRUFBQyxFQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRyxRQUFRLEVBQUUsU0FBUyxFQUFHLElBQUksRUFBRSwrQkFBK0IsRUFBQztxQkFDNVAsQ0FBQztnQkFDSixDQUFDO2dCQWZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsUUFBUSxFQUFFLDRKQU1UO3dCQUNELFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO3FCQUNwQyxDQUFDOztnQ0FBQTtnQkFLRixtQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsdUNBSUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21haW4tZGFuaWNhcmdvbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8dWw+XG4gICAgICA8bGkgKm5nRm9yPVwiI2NvbnRhY3RzIG9mIGNvbnRhY3RzXCI+XG4gICAgICAgIHt7Y29udGFjdHMubmFtZX19IHt7Y29udGFjdHMubGFzdG5hbWV9fSA6IHt7Y29udGFjdHMubWFpbH19XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFtcIi4uL3NyYy9jc3MvYXBwLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBwdWJsaWMgY29udGFjdHMgPSBbXG4gICAgeyBuYW1lOiBcIkRhbmllbFwiICwgbGFzdG5hbWU6IFwiQ8OhcmRlbmFzXCIgLCBtYWlsOiBcImRhbmllbC5jYXJkZW5hc0Bjb250cm9sYm94Lm5ldFwifSAsIHsgbmFtZTogXCJWYWxlbnRpbmFcIiAsIGxhc3RuYW1lOiBcIlNhbGF6YXJcIiAsIG1haWw6IFwidmFsZW50aW5hLnNhbHphckBjb250cm9sYm94Lm5ldFwifSAsIHsgbmFtZTogXCJtYW51ZWxhXCIgLCBsYXN0bmFtZTogXCJWaWxsYWRhXCIgLCBtYWlsOiBcIm1hbnVlbC52aWxhbGRhQGNvbnRyb2xib3gubmV0XCJ9LFxuICBdO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
