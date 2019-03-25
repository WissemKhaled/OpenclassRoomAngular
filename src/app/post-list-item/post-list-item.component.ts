import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.less']
})
export class PostListItemComponent implements OnInit {

  count: number = 1;

  @Input() postName: string;

  lastUpdate = new Date();

  constructor() { }

  ngOnInit() {
  }

  onUp() {
    this.count = this.count+1;
    console.log(this.count);
  }
  onDown() {
    this.count = this.count-1;
    console.log(this.count);
  }
  getColor() {
    if(this.count >= 1) {
      return 'rgb(0,110,46)';
    } else if(this.count < 1) { 
      return 'rgb(204,0,0';
    }
  }
  getBackColor() {
    if(this.count >= 1) {
      return '#E2EFDB';
    } else if(this.count < 1) { 
      return '#EFDFDF';
    }
  }
}
