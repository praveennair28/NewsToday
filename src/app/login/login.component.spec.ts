import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { SearchNewsComponent } from '../search-news/search-news.component';
import { AuthApiService } from '../service/authapiservice';
import { TopStoriesComponent } from '../top-stories/top-stories.component';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [AuthApiService],
      imports: [HttpClientTestingModule,FormsModule,RouterTestingModule.withRoutes(
        [{path: 'Search', component: SearchNewsComponent},
        {path: 'Home', component: TopStoriesComponent}]
      )],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.cookie = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('Login component setCookie() to be called',(() =>
  {
    component.setCookie('');
    expect(component.cookie).not.toBeNull();
  }));

  it('Search component Login() with service call',(() =>
  {
    let service = fixture.debugElement.injector.get(AuthApiService);    
    spyOn(service, "Login").and.callFake(()=>{
      return of({
        access_token:"abc"
      })
    });
    component.Login("");
    expect(component.cookie).not.toBeNull();
  }));

  it('Search component Register() with service call',(() =>
  {
    let service = fixture.debugElement.injector.get(AuthApiService);    
    spyOn(service, "Register").and.callFake(()=>{
      return of({
        access_token:"abc"
      })
    });
    component.Register("");
    expect(component.cookie).not.toBeNull();
  }));

});
