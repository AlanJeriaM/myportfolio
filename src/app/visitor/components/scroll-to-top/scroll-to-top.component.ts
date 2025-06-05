import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.scss'
})
export class ScrollToTopComponent {
  showScrollButton = false;
  scrollProgress = 0;
  circumference = 2 * Math.PI * 45; // 2 * π * radio

  get strokeDashoffset() {
    return this.circumference * (1 - this.scrollProgress / 100);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    this.scrollProgress = (scrollTop / docHeight) * 100;
    this.showScrollButton = scrollTop > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
