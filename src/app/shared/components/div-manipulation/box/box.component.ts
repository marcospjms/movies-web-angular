import {Component, DoCheck, HostBinding, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';
import {IBox} from "../../../model/box.interface";

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnChanges {

  @Input()
  box: IBox | null = null;

  @Input()
  ref: any;

  @HostBinding('style.transform')
  transform = '';

  @HostBinding('style.background-color')
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
