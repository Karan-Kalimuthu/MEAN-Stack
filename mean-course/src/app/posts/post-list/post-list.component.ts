import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // posts = [
  //   { title: 'First Posts', content: 'This is the first post content' },
  //   { title: 'Second Posts', content: 'This is the second post content' },
  //   { title: 'Third Posts', content: 'This is the third post content' }
  // ];
  @Input() posts = [];
}
