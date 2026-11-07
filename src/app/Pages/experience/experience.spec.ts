import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { of } from 'rxjs';

import { Experience } from './experience';
import { JobsExpService } from '../../service/jobs-exp.service';

describe('Experience projects', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([{ path: 'experience', component: Experience }]),
        { provide: JobsExpService, useValue: { list: () => of([]) } },
      ],
    });
  });

  it('opens projects from the URL, filters them, and switches back to work experience', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/experience?tab=projects', Experience);
    const root = harness.routeNativeElement as HTMLElement;
    expect(root.textContent).toContain('Comdesk');
    expect(root.textContent).toContain('Cloud Sentinel');
    expect(root.querySelector('a[href="https://soporte.comware.com.ec"]')).not.toBeNull();

    const search = root.querySelector('input[aria-label="Search projects"]') as HTMLInputElement;
    search.value = 'sentinel';
    search.dispatchEvent(new Event('input'));
    harness.detectChanges();
    expect(root.textContent).toContain('Cloud Sentinel');
    expect(root.textContent).not.toContain('Comdesk');

    const workButton = Array.from(root.querySelectorAll('button')).find((button) =>
      button.textContent?.includes('Work Experience'),
    )!;
    workButton.click();
    await harness.fixture.whenStable();
    harness.detectChanges();
    expect(root.querySelector('input[aria-label="Search roles or companies"]')).not.toBeNull();
    expect(root.textContent).not.toContain('Cloud Sentinel');

    const projectsButton = Array.from(root.querySelectorAll('button')).find((button) =>
      button.textContent?.trim() === 'Projects',
    )!;
    projectsButton.click();
    await harness.fixture.whenStable();
    harness.detectChanges();
    expect(root.textContent).toContain('Comdesk');
    expect(root.textContent).toContain('Cloud Sentinel');
  });
});
