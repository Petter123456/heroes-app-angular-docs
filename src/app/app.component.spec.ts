import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroesComponent } from '../app/Heroes/heroes.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HeroesComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('heros-tutorial-app app is running!');
  });
});
