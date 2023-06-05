// Modulos de Angular
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// RoutingModule
import { AppRoutingModule } from './app-routing.module';

// Firebase Modules
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

/** 
 * Importamos los modulos de los componentes y de las páginas del sitio para poder
 * utilizarlos en el componente principal. (Los añadimos en la sección de "imports" en el NgModule)
*/ 

// Componentes
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ToastrModule } from 'ngx-toastr';

// Firebase Push notifications
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { PushNotificationService } from './services/push-notification.service';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireMessagingModule, 
    ToastrModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideMessaging(() => getMessaging()),
  ],
  providers: [PushNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
