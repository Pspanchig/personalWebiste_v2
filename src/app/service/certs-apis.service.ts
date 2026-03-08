import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface CertAPI {
  id: number;
  nombre: string;
  entidad_emisora: string;
  fecha_expedicion: string;
  fecha_vencimiento: string;
  id_credencial: string;
  url_credencial: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root',
})

export class CertsApisService {
  constructor(private http: HttpClient) {}

  private base = '/apis/certification.json';

  list() {
    return this.http
      .get<{ licencias_y_certificaciones: CertAPI[] }>(this.base)
      .pipe(map((response) => response.licencias_y_certificaciones ?? []));
  }
}
