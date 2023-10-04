import { Component } from '@angular/core';
import { ClienteFormService } from './services/cliente-form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-page',
  templateUrl: './cadastro-page.component.html',
})
export class CadastroPageComponent {
  form: FormGroup;

  constructor(clientFormService: ClienteFormService) {
    this.form = clientFormService.form;
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.form.invalid) {
      // Focus the first invalid input
      // Note: this is just a very simple implementation for demo purposes
      // and does not cover all edge cases
      const invalidInput = document.querySelector('input.ng-invalid');
      invalidInput instanceof HTMLElement && invalidInput.focus();
      return;
    }

    this.form.disable();
    console.log('Submitting form...!', this.form.value);
  }
}
