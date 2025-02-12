import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCentralCenterComponent } from './blog-central-center.component';

describe('BlogCentralCenterComponent', () => {
  let component: BlogCentralCenterComponent;
  let fixture: ComponentFixture<BlogCentralCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCentralCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCentralCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
