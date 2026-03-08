import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface JobExperience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  description: string[];
}

@Injectable({
  providedIn: 'root',
})
export class JobsExpService {
  constructor(private http: HttpClient) {}

  private base = '/apis/jobsExp.json';

  list() {
    return this.http.get<JobExperience[]>(this.base);
  }
}
