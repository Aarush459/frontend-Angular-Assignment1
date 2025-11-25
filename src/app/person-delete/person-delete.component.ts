import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html'
})
export class PersonDeleteComponent implements OnInit {

  id: any;
  person: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.personService.getPerson(this.id).subscribe(res => {
      this.person = res;
    });
  }

  deletePerson() {
    this.personService.deletePerson(this.id).subscribe(() => {
      this.router.navigate(['/people']);
    });
  }

}
