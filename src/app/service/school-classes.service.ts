import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface SchoolClass {
  id: number;
  school: string;
  department: string;
  course: string;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class SchoolClassesService {
  constructor(private http: HttpClient) {}

  listBySchool(schoolName: string): Observable<SchoolClass[]> {
    const source = this.resolveSource(schoolName);
    return source ? this.http.get<SchoolClass[]>(source) : of([]);
  }

  private resolveSource(schoolName: string): string | null {
    const normalized = this.normalizeValue(schoolName);

    if (normalized.includes('snow')) {
      return '/apis/ClasseSnows.json';
    }

    if (normalized.includes('central missouri') || normalized === 'ucmo') {
      return '/apis/ClassesUCMO.json';
    }

    if (normalized.includes('valencia international') || normalized === 'viu') {
      return '/apis/ClassesVIU.json';
    }

    return null;
  }

  private normalizeValue(value: string): string {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }
}
