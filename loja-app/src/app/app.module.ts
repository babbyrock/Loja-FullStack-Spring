import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { LojasModule } from './lojas/lojas.module';
import { LojasService } from './lojas.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { FuncionarioService } from './funcionario.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    LojasModule,
    FuncionarioModule
  ],
  providers: [
    LojasService,
    FuncionarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
