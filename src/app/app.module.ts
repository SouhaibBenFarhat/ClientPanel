import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

//Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//my imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

//my services imports
import { ClientService } from './services/client.service'
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';

//Routes Configuration

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-client', component: AddClientComponent },
  { path: 'client/:key', component: ClientDetailsComponent },
  { path: 'edit-client/:key', component: EditClientComponent }
];

export const firebaseConfig = {
  apiKey: "AIzaSyDc4SlKAbM-6n0R3bVEx7uVNDtGV7i4-mA",
  authDomain: "hrmanager-abf35.firebaseapp.com",
  databaseURL: "https://hrmanager-abf35.firebaseio.com",
  projectId: "hrmanager-abf35",
  storageBucket: "hrmanager-abf35.appspot.com",
  messagingSenderId: "375938433291"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    FlashMessagesModule

  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    FlashMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
