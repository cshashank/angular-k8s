import { Component, OnInit } from '@angular/core';
import { Covenant } from '../covenant';

@Component({
  selector: 'app-covenants',
  templateUrl: './covenants.component.html',
  styleUrls: ['./covenants.component.css']
})
export class CovenantsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   covenant: Covenant = {
     id: 1,
     name: "Financial covenant"
   }
  // covenant = "Financial covenant"

}
