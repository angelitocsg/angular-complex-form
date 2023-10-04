import { Component, inject } from '@angular/core';
import { ClienteFormService } from '../../services/cliente-form.service';
import { FormGroup, FormControl } from '@angular/forms';

export type EnderecosFormGroup = FormGroup<{
  street: FormControl<string | null>;
  city: FormControl<string | null>;
}>;

export interface IEnderecosForm {
  enderecos: EnderecosFormGroup;
}

export abstract class EnderecosForm implements IEnderecosForm {
  enderecos!: EnderecosFormGroup;
}

@Component({
  selector: 'app-enderecos-form',
  templateUrl: './enderecos-form.component.html',
})
export class EnderecosFormComponent {
  form: EnderecosFormGroup;

  constructor(formGroup: EnderecosForm) {
    this.form = formGroup.enderecos;
  }
}
