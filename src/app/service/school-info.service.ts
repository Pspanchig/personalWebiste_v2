import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface SchoolAttendanceInfo {
  inicio: string;
  fin: string;
  texto: string;
}

export interface SchoolAboutInfo {
  titulo: string;
  descripcion: string;
}

export interface SchoolHighlightInfo {
  titulo: string;
  nombre: string;
  imagen: string;
  descripcion: string;
}

export interface SchoolInfo {
  id: number;
  institucion: string;
  short_name?: string;
  programa: string;
  attendance_time: SchoolAttendanceInfo;
  degree_earned: string;
  location: string;
  about: SchoolAboutInfo;
  rankings: string[];
  abet_image: string;
  highlight: SchoolHighlightInfo;
}

@Injectable({
  providedIn: 'root',
})
export class SchoolInfoService {
  constructor(private http: HttpClient) {}

  private base = '/apis/schoolInfor.json';

  list() {
    return this.http
      .get<{ education: SchoolInfo[] }>(this.base)
      .pipe(map((response) => response.education ?? []));
  }
}
