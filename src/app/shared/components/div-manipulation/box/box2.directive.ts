import {Directive, HostBinding, HostListener, Input, OnChanges} from '@angular/core';
import {IBox} from "../../../model/box.interface";

@Directive({
  selector: '[appBox2]'
})
export class Box2Directive implements OnChanges {

  @Input()
  box: IBox | null = null;

  @Input()
  ref: any;

  @HostBinding('style.transform-origin')
  transformOrigin = 'center center';

  @HostBinding('style.transform')
  transform = '';

  @HostBinding('fillColor')
  backgroundColor = '';

  @HostBinding('style.width.px')
  width = 50;

  @HostBinding('style.height.px')
  height = 50;

  ngOnChanges() {
    this.update();
  }

  @HostListener('click')
  click() {
    console.log('click');
    this.box!.color = `rgb(${255 * Math.random()}, ${255 * Math.random()}, ${255 * Math.random()})`
    this.update();
  }

  update() {
    this.transform = this.box!.transform;
    this.backgroundColor = this.box!.color;
  }

}
