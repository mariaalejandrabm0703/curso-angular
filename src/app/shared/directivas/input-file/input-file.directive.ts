import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from "@angular/core";

@Directive({
  selector: "[appInputFile]",
})
export class InputFileDirective {
  @Input() functionality: string = "funcionalidad";
  @Output() someEvent = new EventEmitter<any>(null);

  constructor(private element: ElementRef) {
    this.element.nativeElement;
  }

  //Escucha cualquier cambio del DOM como acciones y segun eso va a ejecutar una acción
  @HostListener("change") onChange() {
    console.log("entra change");
    this.someEvent.emit(this.element.nativeElement.files);
  }
}
