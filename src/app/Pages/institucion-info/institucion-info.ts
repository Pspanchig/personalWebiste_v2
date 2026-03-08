import { Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Navbar } from '../../assets/shared/navbar/navbar';
import { EduactionApisService, EducationAPI } from '../../service/eduaction-apis.service';
import { SchoolClass, SchoolClassesService } from '../../service/school-classes.service';
import { SchoolInfo, SchoolInfoService } from '../../service/school-info.service';

@Component({
  selector: 'app-institucion-info',
  imports: [Navbar],
  templateUrl: './institucion-info.html',
  styleUrl: './institucion-info.css',
})
export class InstitucionInfo {
  private readonly classesPerPage = 6;
  private route = inject(ActivatedRoute);
  private educationAPI = inject(EduactionApisService);
  private schoolInfoAPI = inject(SchoolInfoService);
  private schoolClassesAPI = inject(SchoolClassesService);
  private sanitizer = inject(DomSanitizer);

  school = signal<EducationAPI | null>(null);
  schoolInfo = signal<SchoolInfo | null>(null);
  schoolClasses = signal<SchoolClass[]>([]);
  currentClassPage = signal(0);
  mapUrl = signal<SafeResourceUrl | null>(null);
  loadingSchool = signal(true);

  visibleClasses = computed(() => {
    const start = this.currentClassPage() * this.classesPerPage;
    return this.schoolClasses().slice(start, start + this.classesPerPage);
  });
  
  totalClassPages = computed(() => Math.max(1, Math.ceil(this.schoolClasses().length / this.classesPerPage)));
  hasPreviousClassPage = computed(() => this.currentClassPage() > 0);
  hasNextClassPage = computed(() => this.currentClassPage() < this.totalClassPages() - 1);
  visibleClassRangeStart = computed(() =>
    this.schoolClasses().length ? this.currentClassPage() * this.classesPerPage + 1 : 0,
  );
  visibleClassRangeEnd = computed(() =>
    Math.min((this.currentClassPage() + 1) * this.classesPerPage, this.schoolClasses().length),
  );

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const schoolName = params.get('name');

      if (!schoolName) {
        this.school.set(null);
        this.schoolInfo.set(null);
        this.schoolClasses.set([]);
        this.currentClassPage.set(0);
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
      classes: this.schoolClassesAPI.listBySchool(schoolName),
    }).subscribe({
      next: ({ schools, schoolDetails, classes }) => {
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
        this.schoolClasses.set(classes);
        this.currentClassPage.set(0);
        this.mapUrl.set(this.buildMapUrl(currentSchoolInfo?.location ?? currentSchool?.location ?? ''));
        this.loadingSchool.set(false);
      },
      error: (err) => {
        console.error('Error fetching school data:', err);
        this.school.set(null);
        this.schoolInfo.set(null);
        this.schoolClasses.set([]);
        this.currentClassPage.set(0);
        this.mapUrl.set(null);
        this.loadingSchool.set(false);
      },
    });
  }

  previousClassPage() {
    if (!this.hasPreviousClassPage()) {
      return;
    }

    this.currentClassPage.update((page) => page - 1);
  }

  nextClassPage() {
    if (!this.hasNextClassPage()) {
      return;
    }

    this.currentClassPage.update((page) => page + 1);
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
