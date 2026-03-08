import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface SkillAPI{
  id: number;
  nombre: string;
  nivel: number
  imagen: string
}

@Injectable({
  providedIn: 'root',
})
export class SkillsApisService {
  constructor(private http: HttpClient) {} 

  private base = '/apis/Skill.json';

  list() {
    return this.http
      .get<{ skills: SkillAPI[] }>(this.base)
      .pipe(map((response) => response.skills ?? []));
  }
}
