import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export type ContatosFormGroup = FormGroup<{
  celular: FormControl<string | null>;
  email: FormControl<string | null>;
}>;

export interface IContatosForm {
  contatos: ContatosFormGroup;
}

export abstract class ContatosForm implements IContatosForm {
  contatos!: ContatosFormGroup;
}

@Component({
  selector: 'app-contatos-form',
  templateUrl: './contatos-form.component.html',
})
export class ContatosFormComponent {
  form: ContatosFormGroup;

  constructor(formGroup: ContatosForm) {
    this.form = formGroup.contatos;
  }
}
