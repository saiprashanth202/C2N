import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent  } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
 
  { path: '',      component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent,
    
  }
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    
   
    RegisterComponent,
    
  ],
  imports: [
    
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
