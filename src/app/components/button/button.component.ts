import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class BottonComponent implements OnInit {
@Input() text: string = "";
@Input() color: string = "";
@Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }

}
