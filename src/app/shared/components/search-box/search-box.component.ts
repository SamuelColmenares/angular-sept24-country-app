import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent {

  @Input()
  public placeholder='Buscar..';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value:string):void{
    console.log('value on search-box :>> ', value);
    this.onValue.emit(value);
  }
}
