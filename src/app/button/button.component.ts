import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() genre;

  @Output() getValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.getValue.emit(this.genre);
  }

}
