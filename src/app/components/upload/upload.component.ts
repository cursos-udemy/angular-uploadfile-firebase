import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item';
import { UploadFirebaseService } from '../../services/upload-firebase.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styles: []
})
export class UploadComponent implements OnInit {

  public fileItemList:FileItem[];
  public isMouseIntoDropZone:boolean;

  constructor(private uploadFirebaseService:UploadFirebaseService) {
    this.fileItemList = [];
    this.isMouseIntoDropZone = false;
   }

  ngOnInit() {
  }


  public uploadImages() {
    console.log("uploadImages");
    this.uploadFirebaseService.uploadToFirebase(this.fileItemList);
  }

}
