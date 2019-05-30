import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  animations: [routerTransition()]

})
export class OffersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
