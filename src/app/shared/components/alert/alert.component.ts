import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jlm-alert',
  template: `
    <div class="alert">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
