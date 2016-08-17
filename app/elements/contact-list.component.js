System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ContactListComponent;
    return {
        setters:[],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent() {
                    this.contacts = [
                        { name: "Daniel", lastname: "Cárdenas", mail: "daniel.cardenas@controlbox.net" }, { name: "Valentina", lastname: "Salazar", mail: "valentina.salzar@controlbox.net" }, { name: "manuela", lastname: "Villada", mail: "manuel.vilalda@controlbox.net" },
                    ];
                    this.saludo = { name: "your name here", pregunta: "Can you see me now?" };
                    this.showMe = false;
                    this.selectedContact = {};
                }
                ContactListComponent.prototype.onSelect = function () {
                    this.showMe = true;
                };
                ContactListComponent.prototype.onSelect = function (contacts) {
                    this.selectedContact = contacts;
                };
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQWFBO2dCQUFBO29CQUNTLGFBQVEsR0FBRzt3QkFDaEIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFHLFFBQVEsRUFBRSxVQUFVLEVBQUcsSUFBSSxFQUFFLGdDQUFnQyxFQUFDLEVBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFHLFFBQVEsRUFBRSxTQUFTLEVBQUcsSUFBSSxFQUFFLGlDQUFpQyxFQUFDLEVBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFHLFFBQVEsRUFBRSxTQUFTLEVBQUcsSUFBSSxFQUFFLCtCQUErQixFQUFDO3FCQUM1UCxDQUFDO29CQUNLLFdBQU0sR0FBRyxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRyxRQUFRLEVBQUUscUJBQXFCLEVBQUUsQ0FBQztvQkFFckUsV0FBTSxHQUFHLEtBQUssQ0FBQztvQkFFZixvQkFBZSxHQUFHLEVBQUUsQ0FBQztnQkFROUIsQ0FBQztnQkFOQyx1Q0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixDQUFDO2dCQUNELHVDQUFRLEdBQVIsVUFBUyxRQUFRO29CQUNmLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO2dCQUNsQyxDQUFDO2dCQUNILDJCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCx1REFnQkMsQ0FBQSIsImZpbGUiOiJlbGVtZW50cy9jb250YWN0LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2NvbnRhY3QtbGlzdCcsXG4gIHRlbXBsYXRlOmBcbiAgPHVsPlxuICAgIDxsaSAqbmdGb3I9XCIjY29udGFjdHMgb2YgY29udGFjdHNcIiAoY2xpY2spPVwib25TZWxlY3QoY29udGFjdHMpXCIgPlxuICAgICAge3tjb250YWN0cy5uYW1lfX0ge3tjb250YWN0cy5sYXN0bmFtZX19IDoge3tjb250YWN0cy5tYWlsfX1cbiAgICA8L2xpPlxuICA8L3VsPlxuICBgXG4pfVxuXG5leHBvcnQgY2xhc3MgQ29udGFjdExpc3RDb21wb25lbnQge1xuICBwdWJsaWMgY29udGFjdHMgPSBbXG4gICAgeyBuYW1lOiBcIkRhbmllbFwiICwgbGFzdG5hbWU6IFwiQ8OhcmRlbmFzXCIgLCBtYWlsOiBcImRhbmllbC5jYXJkZW5hc0Bjb250cm9sYm94Lm5ldFwifSAsIHsgbmFtZTogXCJWYWxlbnRpbmFcIiAsIGxhc3RuYW1lOiBcIlNhbGF6YXJcIiAsIG1haWw6IFwidmFsZW50aW5hLnNhbHphckBjb250cm9sYm94Lm5ldFwifSAsIHsgbmFtZTogXCJtYW51ZWxhXCIgLCBsYXN0bmFtZTogXCJWaWxsYWRhXCIgLCBtYWlsOiBcIm1hbnVlbC52aWxhbGRhQGNvbnRyb2xib3gubmV0XCJ9LFxuICBdO1xuICBwdWJsaWMgc2FsdWRvID0ge25hbWU6IFwieW91ciBuYW1lIGhlcmVcIiAsIHByZWd1bnRhOiBcIkNhbiB5b3Ugc2VlIG1lIG5vdz9cIiB9O1xuXG4gIHB1YmxpYyBzaG93TWUgPSBmYWxzZTtcblxuICBwdWJsaWMgc2VsZWN0ZWRDb250YWN0ID0ge307XG5cbiAgb25TZWxlY3QoKSB7XG4gICAgdGhpcy5zaG93TWUgPSB0cnVlO1xuICB9XG4gIG9uU2VsZWN0KGNvbnRhY3RzKSB7XG4gICAgdGhpcy5zZWxlY3RlZENvbnRhY3QgPSBjb250YWN0cztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
