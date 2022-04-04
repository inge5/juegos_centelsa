import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
import { PierdeJuego1Component } from './pierde-juego1/pierde-juego1.component';
import { PierdeJuego2Component } from './pierde-juego2/pierde-juego2.component';
import { MemoramaComponent } from './memorama/memorama.component';
import { GanaJuego1Component } from './gana-juego1/gana-juego1.component';
import { GanaJuego2Component } from './gana-juego2/gana-juego2.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    PierdeJuego1Component,
    PierdeJuego2Component,
    MemoramaComponent,
    GanaJuego1Component,
    GanaJuego2Component,
    AhorcadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
