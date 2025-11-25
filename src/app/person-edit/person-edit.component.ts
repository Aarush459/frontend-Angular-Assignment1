import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
})
export class PersonEditComponent implements OnInit {

  id: string = '';
  person: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personService.getPerson(this.id).subscribe(data => {
      this.person = data;
    });
  }

  updatePerson() {
    this.personService.updatePerson(this.id, this.person)
      .subscribe(() => {
        this.router.navigate(['/people']);
      });
  }
}
