import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({ templateUrl: 'about.component.html' })
export class AboutComponent {
  firstName: string = '';
  lastName: string = '';

  onSubmit(form: NgForm) {
    alert(
      'FirstName : ' +
        form.value.firstName +
        ' LastName : ' +
        form.value.lastName
    );
  }
}
