import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Navbar } from '../../assets/shared/navbar/navbar';
import { EduactionApisService, EducationAPI } from '../../service/eduaction-apis.service';
import { SchoolInfo, SchoolInfoService } from '../../service/school-info.service';

@Component({
  selector: 'app-institucion-info',
  imports: [Navbar],
  templateUrl: './institucion-info.html',
  styleUrl: './institucion-info.css',
})
export class InstitucionInfo {
  private route = inject(ActivatedRoute);
  private educationAPI = inject(EduactionApisService);
  private schoolInfoAPI = inject(SchoolInfoService);
  private sanitizer = inject(DomSanitizer);

  school = signal<EducationAPI | null>(null);
  schoolInfo = signal<SchoolInfo | null>(null);
  mapUrl = signal<SafeResourceUrl | null>(null);
  loadingSchool = signal(true);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const schoolName = params.get('name');

      if (!schoolName) {
        this.school.set(null);
        this.schoolInfo.set(null);
        this.mapUrl.set(null);
        this.loadingSchool.set(false);
        return;
      }

      this.loadSchoolData(schoolName);
    });
  }

  private loadSchoolData(schoolName: string) {
    this.loadingSchool.set(true);

    forkJoin({
      schools: this.educationAPI.list(),
      schoolDetails: this.schoolInfoAPI.list(),
    }).subscribe({
      next: ({ schools, schoolDetails }) => {
        const currentSchool = schools.find((school) => school.name === schoolName) ?? null;
        const currentSchoolInfo =
          schoolDetails.find((schoolDetail) => schoolDetail.id === currentSchool?.id) ??
          schoolDetails.find(
            (schoolDetail) =>
              this.normalizeValue(schoolDetail.institucion) === this.normalizeValue(schoolName) ||
              this.normalizeValue(schoolDetail.short_name ?? '') === this.normalizeValue(schoolName),
          ) ??
          null;

        this.school.set(currentSchool);
        this.schoolInfo.set(currentSchoolInfo);
        this.mapUrl.set(this.buildMapUrl(currentSchoolInfo?.location ?? currentSchool?.location ?? ''));
        this.loadingSchool.set(false);
      },
      error: (err) => {
        console.error('Error fetching school data:', err);
        this.school.set(null);
        this.schoolInfo.set(null);
        this.mapUrl.set(null);
        this.loadingSchool.set(false);
      },
    });
  }

  private buildMapUrl(location: string): SafeResourceUrl | null {
    if (!location) {
      return null;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`,
    );
  }

  private normalizeValue(value: string): string {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }
}
