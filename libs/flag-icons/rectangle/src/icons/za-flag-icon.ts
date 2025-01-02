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
  selector: 'svg[si-za-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="za-a">
        <svg:path fill-opacity=".7" d="M-71.9 0h682.7v512H-71.9z" />
      </clipPath>
    </defs>
    <g clip-path="url(#za-a)" transform="translate(67.4)scale(.93748)">
      <g fill-rule="evenodd" stroke-width="1pt">
        <svg:path fill="#000001" d="M-71.9 407.8V104.4L154 256.1z" />
        <svg:path fill="#000c8a" d="m82.2 512.1 253.6-170.6H696V512H82.2z" />
        <svg:path fill="#e1392d" d="M66 0h630v170.8H335.7S69.3-1.7 66 0" />
        <svg:path
          fill="#ffb915"
          d="M-71.9 64v40.4L154 256-72 407.8v40.3l284.5-192z"
        />
        <svg:path
          fill="#007847"
          d="M-71.9 64V0h95l301.2 204h371.8v104.2H324.3L23 512h-94.9v-63.9l284.4-192L-71.8 64z"
        />
        <svg:path
          fill="#fff"
          d="M23 0h59.2l253.6 170.7H696V204H324.3zm0 512.1h59.2l253.6-170.6H696v-33.2H324.3L23 512z"
        />
      </g>
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiZaFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
