import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export type DadosPessoaisFormGroup = FormGroup<{
  name: FormControl<string | null>;
}>;

export interface IDadosPessoaisForm {
  dadosPessoais: DadosPessoaisFormGroup;
}

export abstract class DadosPessoaisForm implements IDadosPessoaisForm {
  dadosPessoais!: DadosPessoaisFormGroup;
}

@Component({
  selector: 'app-dados-pessoais-form',
  templateUrl: './dados-pessoais-form.component.html',
})
export class DadosPessoaisFormComponent {
  form: DadosPessoaisFormGroup;

  constructor(formGroup: DadosPessoaisForm) {
    this.form = formGroup.dadosPessoais;
  }
}
