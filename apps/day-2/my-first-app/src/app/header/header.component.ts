import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  // templateUrl: './header.component.html',
  template: `
    <h3>Inline Template Demo</h3>
    <p>inline para</p>
  `,
  // styleUrls: ['./header.component.css']
  styles: [`
    h3 { 
      background-color: yellow 
    }
  `]
})
export class HeaderComponent { }
