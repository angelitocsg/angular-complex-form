import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CadastroPageV2Module } from './modules/cadastro-page-v2/cadastro-page-v2.module';
import { CadastroPageComponent } from './modules/cadastro-page/cadastro-page.component';
import { CadastroPageModule } from './modules/cadastro-page/cadastro-page.module';
import { CadastroPageV2Component } from './modules/cadastro-page-v2/cadastro-page-v2.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CadastroPageModule,
    CadastroPageV2Module,
  ],
  bootstrap: [CadastroPageComponent, CadastroPageV2Component],
})
export class AppModule {}
