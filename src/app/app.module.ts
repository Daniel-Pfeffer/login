import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {LoginService} from './login.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LogoutComponent} from './logout/logout.component';
import {RegisterComponent} from './register/register.component';
import {MaterialModule} from './material/material.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        AboutComponent,
        PageNotFoundComponent,
        LogoutComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        MaterialModule
    ],
    providers: [LoginService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
