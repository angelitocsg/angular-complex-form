import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CadastroPageModule } from './modules/cadastro-page/cadastro-page.module';
import { CadastroPageComponent } from './modules/cadastro-page/cadastro-page.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule, CadastroPageModule],
  bootstrap: [CadastroPageComponent],
})
export class AppModule {}
