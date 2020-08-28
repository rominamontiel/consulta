import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ReactComponent } from './pages/react/react.component';
import { AngularComponent } from './pages/angular/angular.component';
import { CssComponent } from './pages/css/css.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';
import { GitComponent } from './pages/git/git.component';
import { HtmlComponent } from './pages/html/html.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { FlechasLateralesComponent } from './work-done/flechas-laterales/flechas-laterales.component';
import { WorksComponent } from './pages/works/works.component';
import { BoxShadowsComponent } from './work-done/box-shadows/box-shadows.component';
import { CardsComponent } from './work-done/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ReactComponent,
    AngularComponent,
    CssComponent,
    JavascriptComponent,
    GitComponent,
    HtmlComponent,
    RecursosComponent,
    FlechasLateralesComponent,
    WorksComponent,
    BoxShadowsComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
