import { Component } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Jump4Fun';
  isScrolled = false
  navPosition = "Portfolio"


  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if(this.router.url == "/"){
        this.navPosition = "Portfolio"
      }
      if(this.router.url.startsWith("/contact") || this.router.url.startsWith("/support")){
        this.navPosition = "Support"
      }
      if(this.router.url.startsWith("/privacy_policy")){
        this.navPosition = "Privacy Policy"
      }
  });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = number > 40
  }
}
