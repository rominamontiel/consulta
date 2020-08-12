import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ReactComponent } from './pages/react/react.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';
import { AngularComponent } from './pages/angular/angular.component';
import { CssComponent } from './pages/css/css.component';
import { GitComponent } from './pages/git/git.component';
import { HtmlComponent } from './pages/html/html.component';
import { RecursosComponent } from './pages/recursos/recursos.component';


const routes: Routes = [{
  path: 'home',
  component: HomeComponent
  },{
  path: '',
  component: NavComponent,    
  children: [{
      path:'react',
      component: ReactComponent
    },{
      path: 'javascript',
      component: JavascriptComponent
    },{
      path: 'angular',
      component: AngularComponent
    },{
      path: 'css',
      component: CssComponent
    },{
      path: 'git',
      component: GitComponent
    },{
      path: 'html',
      component: HtmlComponent
    },{
      path: 'recursos',
      component: RecursosComponent
    },{
      path: '',
      redirectTo: '/angular',
      pathMatch: 'full'
    }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
