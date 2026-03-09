import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface EducationAPI {
  id: number;
  name: string;
  location: string;
  enrolled: string;
  degree: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})

export class EduactionApisService {
  constructor(private http: HttpClient) {} 

  private base = 'apis/education.json';

  list() {
    return this.http.get<EducationAPI[]>(this.base);
  }
}
