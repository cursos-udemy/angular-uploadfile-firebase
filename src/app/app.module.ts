import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';

// componentes
import { AppComponent } from './app.component';
import { FilesComponent } from './components/files/files.component';
import { UploadComponent } from './components/upload/upload.component';

// servicios
import { UploadFirebaseService } from './services/upload-firebase.service';

// directivas
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    UploadComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [UploadFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
