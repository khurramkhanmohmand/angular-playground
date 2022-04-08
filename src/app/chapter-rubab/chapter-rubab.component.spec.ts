import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterRubabComponent } from './chapter-rubab.component';

describe('ChapterRubabComponent', () => {
  let component: ChapterRubabComponent;
  let fixture: ComponentFixture<ChapterRubabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterRubabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterRubabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
