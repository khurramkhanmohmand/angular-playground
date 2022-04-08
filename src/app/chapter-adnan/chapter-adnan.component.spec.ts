import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterAdnanComponent } from './chapter-adnan.component';

describe('ChapterAdnanComponent', () => {
  let component: ChapterAdnanComponent;
  let fixture: ComponentFixture<ChapterAdnanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterAdnanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterAdnanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
