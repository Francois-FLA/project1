import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InfosGeneralesComponent } from './infos-generales/infos-generales.component';
import { InfosCandidatComponent } from './infos-candidat/infos-candidat.component';
import { MenuRecruteursComponent } from './menu-recruteurs/menu-recruteurs.component';
import { FormsComponent } from './forms/forms.component';
import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfosGeneralesComponent,
    InfosCandidatComponent,
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
