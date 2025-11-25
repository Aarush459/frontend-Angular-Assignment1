import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  people: any[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.getPeople().subscribe(
      (data: any) => {
        console.log("API DATA:", data);   // 🔥 debug
        this.people = data;
      },
      error => {
        console.error("API ERROR:", error);
      }
    );
  }
}
