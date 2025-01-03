import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-gamescience-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Game Science</title>
    <svg:path
      d="M1.847 19.089c-.555-.137-.853-.305-1.213-.685-.613-.645-.76-1.273-.534-2.287.394-1.77 1.645-3.34 3.321-4.166 1.03-.508 1.64-.657 2.693-.656.759 0 .928.027 1.325.212l.456.213 4.263-2.841c2.344-1.563 4.276-2.828 4.294-2.81s-.177.987-.431 2.155c-.254 1.169-.462 2.176-.462 2.24 0 .063 1.865-1.167 4.144-2.734 4.153-2.856 4.42-3.037 4.265-2.883-.268.266-10.33 8.653-10.353 8.63-.015-.017.174-1.036.419-2.267s.436-2.28.426-2.334c-.011-.053-1.231.964-2.712 2.26l-2.693 2.356-.053.765c-.17 2.428-2.022 4.156-5.168 4.823-.69.146-1.42.15-1.987.009"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGamescienceIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
