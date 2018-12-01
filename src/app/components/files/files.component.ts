import { Component, OnInit } from '@angular/core';
import { UploadFirebaseService, Item } from '../../services/upload-firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styles: []
})
export class FilesComponent implements OnInit {

  private items: Observable<Item[]>;
  constructor(uploadFirebaseService:UploadFirebaseService) {
    uploadFirebaseService.getImagesUploaded().subscribe( (data:any) => {
        this.items = data
    });
  }



  ngOnInit() {
  }

}
