import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
             <h2>{{name}}</h2>`,
})
export class AppComponent  { name = 'Angular'; }
   