import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {IBox} from "../../model/box.interface";

@Component({
  selector: 'app-div-manipulation',
  templateUrl: './div-manipulation.component.html',
  styleUrls: ['./div-manipulation.component.scss']
})
export class DivManipulationComponent implements OnInit {
  diff = {
    x: 0,
    y: 0,
  };

  boxes: IBox[] = [
    {
      cx: 50,
      cy: 50,
      scaleX: 1,
      scaleY: 1,
      rotation: 0,
      color: '#FF0000FF',
      transform: '',
    }
  ];

  selectedBox: IBox | null = null;

  ngOnInit(): void {
    this.boxes.forEach(box => this.applyChange(box));
  }

  applyChange(box: IBox) {
    box.transform = `translate(${box.cx}px, ${box.cy}px)  rotate(${box.rotation}deg) scale(${box.scaleX}, ${box.scaleY})`;
    return box;
  }

  startMoving($event: MouseEvent, box: IBox) {
    this.selectedBox = box;
    this.diff = {
      x: $event.x - this.selectedBox.cx,
      y: $event.y - this.selectedBox.cy,
    }
    console.log('start moving', this.selectedBox, this.diff);
  }

  move($event: MouseEvent) {
    if (!this.selectedBox) {
      return;
    }
    this.selectedBox.cx = $event.x - this.diff.x;
    this.selectedBox.cy = $event.y - this.diff.y;
    this.applyChange(this.selectedBox);
  }

  addBox() {
    const box: IBox = {
      cx: Math.random() * 1000,
      cy: Math.random() * 1000,
      scaleX: 1,
      scaleY: 1,
      rotation: 0,
      color: '#FF0000FF',
      transform: '',

    };
    this.boxes.push(this.applyChange(box));
  }
}
