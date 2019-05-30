import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [routerTransition()]

})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
