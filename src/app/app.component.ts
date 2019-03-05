import { Component } from '@angular/core';

@Component({
  selector: 'jlm-root',
  template: `
    <jlm-navbar></jlm-navbar>
    <jlm-alert>ecco il messaggio di alert!</jlm-alert>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-complete-starter';
}
