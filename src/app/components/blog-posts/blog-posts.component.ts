import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss'],
})
export class BlogPostsComponent implements OnInit {
  blogs = [1, 2, 3, 4, 5, 6];
  constructor() {}

  ngOnInit(): void {}
}
