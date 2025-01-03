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
  selector: 'svg[si-nr-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="nr-a">
        <svg:path fill-opacity=".7" d="M-54.7 0H628v512H-54.7z" />
      </clipPath>
    </defs>
    <svg:g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#nr-a)"
      transform="translate(51.3)scale(.9375)"
    >
      <svg:path fill="#002170" d="M-140 0H884v512H-140z" />
      <svg:path fill="#ffb20d" d="M-140 234.1H884V278H-140z" />
      <svg:path
        fill="#fff"
        d="m161.8 438-33-33-10.5 45.4-12-45-31.9 34 12.1-45L42 407.9l33-33-45.4-10.6 45-12-34-31.8 45 12L72 288l33 33 10.6-45.4 12 45 31.8-34-12 45 44.5-13.5-33 33 45.4 10.5-45 12 34 32-45-12.2z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiNrFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
