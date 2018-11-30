import {
  Directive,
  EventEmitter,
  ElementRef,
  HostListener,
  Input,
  Output
} from "@angular/core";
import { FileItem } from "../models/file-item";

@Directive({
  selector: "[appNgDropFiles]"
})
export class NgDropFilesDirective {
  @Input()
  public files: FileItem[] = [];

  @Output()
  public mouseInto: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  // eventos
  @HostListener("dragover", ["$event"])
  public onDragOver(event: Event): void {
    this.mouseInto.emit(true);
    this.prevenirVisualizacion(event)
  }

  @HostListener("dragleave", ["$event"])
  public onDragLeave(event: Event): void {
    this.mouseInto.emit(false);
  }

  @HostListener("drop", ["$event"])
  public onDrop(event: Event): void {
    
    const dataTransfer = this.getDataTransfer(event);
    if (!dataTransfer) {
      return;
    }
    this.processFileUpload(dataTransfer.files);
    
    this.prevenirVisualizacion(event);
    
    this.mouseInto.emit(false);
  }

  //
  private getDataTransfer(event:any) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private processFileUpload(uploadFileList: FileList) {
    for (const property of Object.getOwnPropertyNames(uploadFileList) ) {
      const fileTemp:File = uploadFileList[property];
      if (this.isFileValid(fileTemp)) {
        this.files.push( new FileItem(fileTemp));
      }
    }

    console.log(this.files);
    
  }


  // validaciones

  private isFileValid(file: File): boolean {
    if (!this.isDroppedFile(file.name) && this.isImage(file.type)) {
      return true;
    }
    return false;
  }

  private prevenirVisualizacion(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private isDroppedFile(filename: string): boolean {
    let result: boolean = false;
    for (const file of this.files) {
      if (file.filename === filename) {
        console.log(`El archivo ${filename} ya esta agregado`);
        result = true;
        break;
      }
    }

    return result;
  }

  private isImage(filetype: string): boolean {
    return filetype == undefined || filetype.length == 0
      ? false
      : filetype.startsWith("image");
  }
}
