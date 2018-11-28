import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import * as firebase from "firebase"


@Injectable({
  providedIn: 'root'
})
export class UploadFirebaseService {

  private PATH_IMAGES:string = "images";

  constructor( private db: AngularFireStorage) { }

  private saveImage(image:any) {
    this.db.upload("", "");
  }
}
