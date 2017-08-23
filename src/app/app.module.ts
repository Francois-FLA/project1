import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { MenuComponent } from './menu/menu.component';
import { InfosGeneralesComponent } from './infos-generales/infos-generales.component';
import { InfosCandidatComponent } from './infos-candidat/infos-candidat.component';
import { InfosCommentaireComponent } from './infos-commentaire/infos-commentaire.component';
import { PagetotaleComponent } from './pagetotale/pagetotale.component';
import { MenuRecruteursComponent } from './menu-recruteurs/menu-recruteurs.component';
import { FormsComponent } from './forms/forms.component';
import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    MenuComponent,
    InfosGeneralesComponent,
    InfosCandidatComponent,
    InfosCommentaireComponent,
    PagetotaleComponent,
    MenuRecruteursComponent,
    FormsComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
