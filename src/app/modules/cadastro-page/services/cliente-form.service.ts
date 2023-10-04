import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  DadosPessoaisForm,
  DadosPessoaisFormGroup,
  IDadosPessoaisForm,
} from '../components/dados-pessoais-form/dados-pessoais-form.component';
import {
  ContatosFormGroup,
  IContatosForm,
} from '../components/contatos-form/contatos-form.component';
import {
  EnderecosFormGroup,
  IEnderecosForm,
} from '../components/enderecos-form/enderecos-form.component';

@Injectable({ providedIn: 'root' })
export class ClienteFormService
  implements IDadosPessoaisForm, IContatosForm, IEnderecosForm
{
  form: FormGroup;

  get dadosPessoais(): DadosPessoaisFormGroup {
    return this.form.get('dadosPessoais') as DadosPessoaisFormGroup;
  }

  get contatos(): ContatosFormGroup {
    return this.form.get('contatos') as ContatosFormGroup;
  }

  get enderecos(): EnderecosFormGroup {
    return this.form.get('enderecos') as EnderecosFormGroup;
  }

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      dadosPessoais: formBuilder.group({
        name: ['', [Validators.required]],
      }),
      contatos: formBuilder.group({
        celular: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
      }),
      enderecos: formBuilder.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
      }),
    });

    this.form.valueChanges.subscribe((value) => {
      console.log(JSON.stringify(value));
    });
  }
}
