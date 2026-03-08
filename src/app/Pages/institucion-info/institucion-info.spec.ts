import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionInfo } from './institucion-info';

describe('InstitucionInfo', () => {
  let component: InstitucionInfo;
  let fixture: ComponentFixture<InstitucionInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitucionInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitucionInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
