import {
  Directive,
  EventEmitter,
  ElementRef,
  HostListener,
  Input,
  Output
} from "@angular/core";

@Directive({
  selector: "[appNgDropFiles]"
})
export class NgDropFilesDirective {

  @Output() 
  public mouseInto:EventEmitter<boolean> = new EventEmitter()

  constructor() {}

  @HostListener ("dragover", ["$event"])
  public onDragOver( event: any) {
    this.mouseInto.emit(true);
  }

  @HostListener ("dragleave", ["$event"])
  public onDragLeave( event: any) {
    this.mouseInto.emit(false);
  }

}
