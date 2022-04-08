import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterKhurramComponent } from './chapter-khurram.component';

describe('ChapterKhurramComponent', () => {
  let component: ChapterKhurramComponent;
  let fixture: ComponentFixture<ChapterKhurramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterKhurramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterKhurramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
