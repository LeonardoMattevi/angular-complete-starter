import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jlm-navbar',
  template: `
  <div>
    <button type="button" routerLink="login">Login</button>
    <button type="button" routerLink="posts">Posts</button>
  </div>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
