import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent implements OnInit {

  text = '';
  constructor() { }

  ngOnInit() {
  }

  checkValue() {
    return this.text === '';
  }

  clear() {
    this.text = '';
  }

}
