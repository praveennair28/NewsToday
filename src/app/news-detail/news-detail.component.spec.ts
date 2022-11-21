import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthApiService } from '../service/authapiservice';

import { NewsDetailComponent } from './news-detail.component';

describe('NewsDetailComponent', () => {
  let component: NewsDetailComponent;
  let fixture: ComponentFixture<NewsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        providers: [AuthApiService],
        imports: [HttpClientTestingModule],
      declarations: [ NewsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('On click Back button should emit event', () => {
    let spy = spyOn(component.goBack, 'emit');
    component.RouteBack();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

});
