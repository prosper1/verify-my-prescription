import { FeatureService } from './../../_services/feature.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  itemList = [];
  total = 0;
  uID = '';
  constructor(
    private rest: FeatureService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.products();
    this.uid();
  }

  products(){
    this.rest.prescription().subscribe(
      data => {
        if (data.length > 0){
          this.router.navigate(['prescription']);
        }
      });
  }

  uid(){
    this.rest.myUId().subscribe(
      data => {
        this.uID = data[0].u_Id;
        localStorage.setItem('uID', this.uID);
      });
  }

}
