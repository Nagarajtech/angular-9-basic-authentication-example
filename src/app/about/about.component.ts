import { Component } from '@angular/core';

@Component({ templateUrl: 'about.component.html' })
export class AboutComponent {
  firstName: string = '';
  lastName: string = '';
  myFunction(): void {
    alert(this.firstName);
  }
}
