import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({ templateUrl: 'about.component.html' })
export class AboutComponent {
  firstName: string = '';
  lastName: string = '';
  myFunction(): void {
    alert(this.firstName);
  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
  }
}
