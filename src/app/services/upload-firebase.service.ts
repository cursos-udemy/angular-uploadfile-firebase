import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import * as firebase from "firebase"
import { FileItem } from '../models/file-item';


@Injectable({
  providedIn: 'root'
})
export class UploadFirebaseService {

  private PATH_IMAGES:string = "images";

  constructor( private storage: AngularFireStorage) { }

  private saveImage(image:any) {

    const file = image;
    const filePath = 'name-your-file-path-here';
    // const ref = this.storage.ref(filePath);
    // const task = ref.put(file);

    const task = this.storage.upload(filePath, file);
    
  }

  public uploadToFirebase(files:FileItem[]) {
    console.log(files);
  }

}
