import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navItems = ['Home', 'Blog', 'Bookmarks', 'Elements', 'Playlists', 'Books'];
  constructor() {}

  ngOnInit(): void {}
}
