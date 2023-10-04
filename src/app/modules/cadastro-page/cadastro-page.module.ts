import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CadastroPageComponent } from './cadastro-page.component';
import {
  ContatosFormComponent,
  ContatosForm,
} from './components/contatos-form/contatos-form.component';
import {
  DadosPessoaisFormComponent,
  DadosPessoaisForm,
} from './components/dados-pessoais-form/dados-pessoais-form.component';
import {
  EnderecosFormComponent,
  EnderecosForm,
} from './components/enderecos-form/enderecos-form.component';
import { ClienteFormService } from './services/cliente-form.service';

@NgModule({
  declarations: [
    DadosPessoaisFormComponent,
    EnderecosFormComponent,
    ContatosFormComponent,
    CadastroPageComponent,
  ],
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: DadosPessoaisForm,
      useExisting: ClienteFormService,
    },
    {
      provide: ContatosForm,
      useExisting: ClienteFormService,
    },
    {
      provide: EnderecosForm,
      useExisting: ClienteFormService,
    },
  ],
})
export class CadastroPageModule {}
