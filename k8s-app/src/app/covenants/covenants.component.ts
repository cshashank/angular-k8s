import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Covenant } from '../covenant';
import { CovenantService } from '../covenant.service';


@Component({
  selector: 'app-covenants',
  templateUrl: './covenants.component.html',
  styleUrls: ['./covenants.component.css']
})


export class CovenantsComponent implements OnInit {

  constructor(private covenantService: CovenantService) { }

  ngOnInit() {
    console.log('on init');
    this.getEnvInfo();
  }

  // app/assets/config/env1

  getEnvInfo(): void{
    this.covenantService.getEnvInfo()
    .subscribe(data => console.log('skc data '+data["env"]));
  }

   covenant: Covenant = {
     id: 1,
     name: "Financial covenant"
   }
  // covenant = "Financial covenant"

}
