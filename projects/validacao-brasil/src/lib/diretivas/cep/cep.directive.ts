import { Directive, ElementRef, HostListener } from '@angular/core';
import { Utils } from '../../utils/utils';

@Directive({
  selector: '[bCep]'
})
export class CepDirective {

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    this.keyDown(event)
  }

  tamMax: number = 8;

  constructor(
    private el: ElementRef,
  ) {}

  private keyDown(event: KeyboardEvent) {

    const numeros = Utils.retornaSoNumero(this.el.nativeElement.value);

    if ((Utils.soNumeros(event)) && ((numeros.length) < this.tamMax) || Utils.setasEBackSpace(event)) {

      if (numeros) {
        this.el.nativeElement.value = Utils.addMascaraCep(numeros, this.tamMax);
      }
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  }

}