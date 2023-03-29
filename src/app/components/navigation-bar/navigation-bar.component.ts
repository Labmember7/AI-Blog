import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  isNavbarVisible = true;
  previousScrollPosition = window.pageYOffset;

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    this.isNavbarVisible = currentScrollPosition <= this.previousScrollPosition;
    this.previousScrollPosition = currentScrollPosition;
  };
}
