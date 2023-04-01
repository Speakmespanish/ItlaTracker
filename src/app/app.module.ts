import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './Usuarios/usuario/usuario.component';
import { AutobusComponent } from './transporte/autobus/autobus.component';
import { BoletosComponent } from './Reserva/boletos/boletos.component';
import { ListaBoletosComponent } from './Reserva/lista-boletos/lista-boletos.component';
import { ParadasComponent } from './Paradas/paradas/paradas.component';
import { CharlieComponent } from './Mapa/charlie/charlie.component';
import { FebreroComponent } from './Mapa/febrero/febrero.component';
import { SanPedroMacorisComponent } from './Mapa/san-pedro-macoris/san-pedro-macoris.component';
import { LogoutComponent } from './Logout/logout/logout.component';
import { LoginComponent } from './Login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    AutobusComponent,
    BoletosComponent,
    ListaBoletosComponent,
    ParadasComponent,
    CharlieComponent,
    FebreroComponent,
    SanPedroMacorisComponent,
    LogoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
