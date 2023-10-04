import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CadastroPageV2Component } from './cadastro-page-v2.component';
import { ContatosFormComponent } from './components/contatos-form/contatos-form.component';
import { DadosPessoaisFormComponent } from './components/dados-pessoais-form/dados-pessoais-form.component';
import { EnderecosFormComponent } from './components/enderecos-form/enderecos-form.component';

@NgModule({
  declarations: [
    ContatosFormComponent,
    DadosPessoaisFormComponent,
    EnderecosFormComponent,
    CadastroPageV2Component,
  ],
  imports: [ReactiveFormsModule],
  providers: [],
})
export class CadastroPageV2Module {}
