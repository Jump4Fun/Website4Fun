import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import material_one_faq from '../../assets/material_one_faq.json';
import watchlist_faq from '../../assets/watchlist_faq.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  selectedApp: string
  subjectLine: string = "Support Request"

  faqs: object[] = [];

  constructor(private _Activatedroute: ActivatedRoute) {
    this.selectedApp = this._Activatedroute.snapshot.paramMap.get("app");
    if (this.selectedApp != null) {
      this.selectedApp = this.selectedApp.replace("_", " ");
      this.subjectLine = this.subjectLine + " for " + this.selectedApp
      this.faqs = getFAQ(this.selectedApp);

    }
  }

  ngOnInit() {
  }
}

function getFAQ(app: string) {
  switch (app) {
    case "Material One":
    case "material one":
      return material_one_faq;
    case "Watchlist":
    case "watchlist":
      return watchlist_faq;
    default:
      return [];
  }

}
