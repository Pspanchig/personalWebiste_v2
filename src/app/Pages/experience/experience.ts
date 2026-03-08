import { Component, computed, inject, signal } from '@angular/core';
import { Navbar } from '../../assets/shared/navbar/navbar';
import { JobExperience, JobsExpService } from '../../service/jobs-exp.service';

@Component({
  selector: 'app-experience',
  imports: [Navbar],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  private jobsExpAPI = inject(JobsExpService);
  private readonly collapsedResponsibilities = 2;

  jobExperiences = signal<JobExperience[]>([]);
  selectedTechnologies = signal<string[]>([]);
  searchQuery = signal('');
  expandedJobIds = signal<number[]>([]);

  availableTechnologies = computed(() =>
    [...new Set(this.jobExperiences().flatMap((job) => job.technologies))].sort(),
  );

  filteredJobs = computed(() => {
    const selected = this.selectedTechnologies();
    const normalizedQuery = this.searchQuery().trim().toLowerCase();

    return this.jobExperiences().filter((job) => {
      const matchesFilters =
        selected.length === 0 || selected.every((technology) => job.technologies.includes(technology));
      const searchableText = [job.company, job.position, ...job.technologies, ...job.description]
        .join(' ')
        .toLowerCase();
      const matchesSearch = !normalizedQuery || searchableText.includes(normalizedQuery);

      return matchesFilters && matchesSearch;
    });
  });

  constructor() {
    this.jobsExpAPI.list().subscribe({
      next: (jobs) => {
        this.jobExperiences.set(jobs);
        this.selectedTechnologies.set([]);
      },
      error: (err) => console.error('Error fetching job experience:', err),
    });
  }

  toggleTechnology(technology: string) {
    this.selectedTechnologies.update((selected) =>
      selected.includes(technology)
        ? selected.filter((item) => item !== technology)
        : [...selected, technology],
    );
  }

  hasTechnologySelected(technology: string) {
    return this.selectedTechnologies().includes(technology);
  }

  updateSearch(query: string) {
    this.searchQuery.set(query);
  }

  toggleExpanded(jobId: number) {
    this.expandedJobIds.update((expanded) =>
      expanded.includes(jobId) ? expanded.filter((id) => id !== jobId) : [...expanded, jobId],
    );
  }

  isExpanded(jobId: number) {
    return this.expandedJobIds().includes(jobId);
  }

  visibleResponsibilities(job: JobExperience) {
    return this.isExpanded(job.id)
      ? job.description
      : job.description.slice(0, this.collapsedResponsibilities);
  }

  canExpandResponsibilities(job: JobExperience) {
    return job.description.length > this.collapsedResponsibilities;
  }

  experienceDateRange(job: JobExperience) {
    return `${this.formatExperienceDate(job.startDate)} - ${this.formatExperienceDate(job.endDate)}`;
  }

  private formatExperienceDate(date: string) {
    if (date.toLowerCase() === 'present') {
      return 'Present';
    }

    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      year: 'numeric',
    }).format(new Date(`${date}T00:00:00`));
  }
}
