import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesModule } from './pages/pages.module';
// Servicios
import { ServiceModule } from './service/service.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from './service/usuario/usuario.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { ChatComponent } from './components/chat/chat.component';
import { ChatService } from './service/chat.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ChartsModule } from 'ng2-charts';
import { BarrasComponent } from './components/barras/barras.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    BarrasComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    ServiceModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ChartsModule
  ],
  providers: [
    UsuarioService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
