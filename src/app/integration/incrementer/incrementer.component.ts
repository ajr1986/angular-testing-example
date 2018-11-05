import { Component, Input, Output, ViewChild, OnInit, EventEmitter, ElementRef } from '@angular/core';
import { text } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: []
})
export class IncrementerComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('text') text: string = 'text';
  @Input() progress: number = 50;

  @Output('updateValue') changeValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onChanges( newValue: number ) {

    if ( newValue >= 100 ) {
      this.progress = 100;
    }else if ( newValue <= 0 ) {
      this.progress = 0;
    }else {
      this.progress = newValue;
    }

    this.txtProgress.nativeElement.value = this.progress;

    this.changeValue.emit( this.progress );

  }

  updateValue( valor: number ) {

    if ( this.progress >= 100 && valor > 0 ) {
      this.progress = 100;
      return;
    }

    if ( this.progress <= 0 && valor < 0 ) {
      this.progress = 0;
      return;
    }

    this.progress = this.progress + valor;

    this.changeValue.emit( this.progress );

  }

}
