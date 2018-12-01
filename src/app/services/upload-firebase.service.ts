import { Injectable } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from "firebase";
import { FileItem } from "../models/file-item";

export interface Item {
  nombre: string;
  url: string;
}

@Injectable({
  providedIn: "root"
})
export class UploadFirebaseService {
  private PATH_IMAGES: string = "images";

  constructor(private db: AngularFirestore) {}

  private saveImage(image: Item) {
    this.db
      .collection(`${this.PATH_IMAGES}`)
      .add(image)
      .then(() => console.log("guardo correctamente"))
      .catch(error => console.error("Error save", error))
      .finally(() => console.log("fin de guardar"));
  }

  public uploadToFirebase(files: FileItem[]) {
    const storageRef = firebase.storage().ref();

    for (const fileItem of files) {
      fileItem.uploadComplete = false;
      if (fileItem.progress >= 100) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef
        .child(`${this.PATH_IMAGES}/${fileItem.filename}`)
        .put(fileItem.file);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) => {
          fileItem.progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => console.error("Error al subir archivo.", error),
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadUrl => {
            fileItem.url = downloadUrl;
            fileItem.uploadComplete = true;
            this.saveImage({ nombre: fileItem.filename, url: fileItem.url });
          });
        }
      );
    }
  }
}
