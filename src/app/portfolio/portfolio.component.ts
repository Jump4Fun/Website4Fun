import { Component, OnInit } from '@angular/core';
import appsJson from '../../assets/my_applications.json'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  apps:object[] = appsJson

  constructor() { }

  ngOnInit() {
  }

}
