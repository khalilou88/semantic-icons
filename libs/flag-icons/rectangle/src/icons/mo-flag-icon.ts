import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-mo-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#00785e" d="M0 0h640v480H0z" />
    <svg:path
      fill="#fbd116"
      d="m295 108.7 40.5 29.5L320 90.5l-15.5 47.7 40.6-29.5z"
    />
    <svg:g id="mo-a">
      <svg:path
        fill="#fff"
        d="M320 331.6H217.5a146.3 146.3 0 0 1-3.8-4H320a2.1 2.1 0 0 1 1.4 2c0 .8-.5 1.7-1.4 2m0-31.3a13 13 0 0 0 1.2-7.6 12.4 12.4 0 0 0-1.2-3.8 82 82 0 0 1-32.5 19 81 81 0 0 1-23.5 3.5h-63.1a144.4 144.4 0 0 0 5.8 8h61c20 0 38.2-7.2 52.3-19.1m-109.6-24.7a32.3 32.3 0 0 1-9.7 2 81 81 0 0 0 60.8 27.5 80.9 80.9 0 0 0 58.5-25 441 441 0 0 0 4.5-58.8 441 441 0 0 0-4.5-67.7c-6.6 6-19 18.7-24.8 38.3A81 81 0 0 0 292 215a80.7 80.7 0 0 0 13.7 45 80.7 80.7 0 0 1-17-49.5c0-12.4 2.8-24.2 7.8-34.7a32.5 32.5 0 0 1-7.5-13 80.7 80.7 0 0 0-10.5 40c0 18 5.9 34.7 15.9 48.1a95 95 0 0 0-73.4-29.4 32.6 32.6 0 0 1 6.8 8.9 95 95 0 0 1 68.6 29.4 95 95 0 0 0-61-22.2 95 95 0 0 0-36.7 7.3 81.2 81.2 0 0 0 82.6 52.2c-4.7.8-9.5 1.3-14.4 1.3a80.8 80.8 0 0 1-56.4-22.8zM320 364.4h-53.1a143.5 143.5 0 0 0 53.1 10.1 11 11 0 0 0 1.3-5 11 11 0 0 0-1.3-5.1m0-24.5h-93.6a143.8 143.8 0 0 0 7.8 6.2H320a4.6 4.6 0 0 0 1.3-3.1 4 4 0 0 0-1.3-3.1m0 12.5h-76.7a143.6 143.6 0 0 0 14.4 8H320a7.6 7.6 0 0 0 1.2-4.2 7.5 7.5 0 0 0-1.2-3.8"
      />
      <svg:path
        fill="#fbd116"
        d="m200.5 174.8 25.4 23.6-6.7-34-14.6 31.4 30.3-16.8zm36.9-32 34.7.6-27.7-21 10.1 33.3 11.3-32.9z"
      />
    </svg:g>
    <use
      xlink:href="#mo-a"
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 640 0)"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMoFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
