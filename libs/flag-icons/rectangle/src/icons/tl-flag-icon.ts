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
  selector: 'svg[si-tl-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="tl-a">
        <svg:path fill-opacity=".7" d="M0 0h682.7v512H0z" />
      </clipPath>
    </defs>
    <svg:g fill-rule="evenodd" clip-path="url(#tl-a)" transform="scale(.9375)">
      <svg:path fill="#cb000f" d="M0 0h1031.2v512H0z" />
      <svg:path fill="#f8c00c" d="M0 0c3.2 0 512 256.7 512 256.7L0 512z" />
      <svg:path fill="#000001" d="M0 0c2.1 0 340.6 256.7 340.6 256.7L0 512z" />
      <svg:path
        fill="#fff"
        d="M187.7 298.2 127 284.7l-31 52.8-5-59.7-60.7-13.3 54.9-24.9-3.3-59.3 40.2 43.4 55.4-25.3-28.9 54 39.2 45.8z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTlFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
