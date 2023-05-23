import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { GeneralComponent } from './components/general/general.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { BoardComponent } from './components/board/board.component';
import { DeleteConfirmComponent } from './components/delete-confirm/delete-confirm.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RemoveUserComponent } from './components/remove-user/remove-user.component';
import { NewBoardCreateComponent } from './components/new-board-create/new-board-create.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NewColumnCreateComponent } from './components/new-column-create/new-column-create.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    HeaderComponent,
    FooterComponent,
    WelcomePageComponent,
    GeneralComponent,
    SignInComponent,
    MainComponent,
    BoardComponent,
    DeleteConfirmComponent,
    ProfileComponent,
    RemoveUserComponent,
    NewBoardCreateComponent,
    NewColumnCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 })
export class AppModule { }
