import { Component, OnInit } from '@angular/core';
import { PetService } from '../api/index';


@Component({
  selector: 'app-pet-domain',
  templateUrl: './pet-domain.component.html',
  styleUrls: ['./pet-domain.component.css']
})
export class PetDomainComponent implements OnInit {

  constructor(private petService: PetService ) { }

  ngOnInit() {
    this.petService.getPetById(1).subscribe(v => console.log(v) );
  }

}
