import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit {

  count = 0;
  posts = [
    {
      name: 'Mon Premier Post',
    },
    {
      name: 'Mon Deuxième post',
    },
    {
      name: "Mon dernier post",
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  
  

}
