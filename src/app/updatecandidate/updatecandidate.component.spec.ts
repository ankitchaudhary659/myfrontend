import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatecandidateComponent } from './updatecandidate.component';

describe('UpdatecandidateComponent', () => {
  let component: UpdatecandidateComponent;
  let fixture: ComponentFixture<UpdatecandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecandidateComponent ],
      imports: [ReactiveFormsModule], 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
