import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MainComponent } from './components/main/main.component';
import { BoardComponent } from './components/board/board.component';



const routes: Routes = [
  {path:'', redirectTo: 'welcome-page', pathMatch: ('full')},
  {path:'', component: WelcomePageComponent},
  {path:'login', component: SignInComponent},
  {path:'register', component: RegisterFormComponent},
  {path:'main', component: MainComponent},
  {path:'board', component: BoardComponent},
  {path:'board/:_id', component: BoardComponent},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
