import { Component, ElementRef, NgZone, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  constructor(
    public zone: NgZone,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

}
