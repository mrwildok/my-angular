import {Component} from 'angular2/core';

@Component({
    selector: 'main-danicargon',
    template: `
    	<h1>{{signature.saludo}}</h1>
    	<ul id="red">
    		<li class="blue"><a href="#">Option 1</a></li>
    		<li class="blue"><a href="#">Option 2</a></li>
    		<li class="blue"><a href="#">Option 3</a></li>
    		<li class="blue"><a href="#">Option 4</a></li>
    		<li class="blue"><a href="#">Option 5</a></li>
    	</ul>
        <h3>{{signature.despedida}}</h3>
    `,
})
export class AppComponent {
    public signature = {saludo: "Hey I'm Daniel Cárdenas", despedida: "Thanks for wach it" , test: "it's a test"};
}