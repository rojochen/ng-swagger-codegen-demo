import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDomainComponent } from './pet-domain.component';

describe('PetDomainComponent', () => {
  let component: PetDomainComponent;
  let fixture: ComponentFixture<PetDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
