import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-momo',
  templateUrl: './momo.component.html',
  styleUrls: ['./momo.component.css']
})
export class MomoComponent implements OnInit {
  uID = '';
  constructor() { }

  ngOnInit(): void {
    this.uID = localStorage.getItem('uID');
  }

}
