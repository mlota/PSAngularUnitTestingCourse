import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeroComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        // Create a testing module
        TestBed.configureTestingModule({
            declarations: [ HeroComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });

        // Create the component
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };
        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
    });

    it('should render the hero name in the anchor tag', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };
        fixture.detectChanges();

        // By debugElement
        expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('SuperDude');

        // By nativeElement
        // expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
    });
});
