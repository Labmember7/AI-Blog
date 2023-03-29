import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateBlogComponent } from './generate-blog.component';

describe('GenerateBlogComponent', () => {
  let component: GenerateBlogComponent;
  let fixture: ComponentFixture<GenerateBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
