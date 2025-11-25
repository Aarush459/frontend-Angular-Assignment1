import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = 'http://localhost:3000/api/person';

  constructor(private http: HttpClient) {}

  // GET all people
  getPeople(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // GET a single person by ID
  getPerson(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // UPDATE (PUT)
  updatePerson(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // DELETE
  deletePerson(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
