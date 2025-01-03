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
  selector: 'svg[si-la-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="la-a">
        <svg:path fill-opacity=".7" d="M177.2 0h708.6v708.7H177.2z" />
      </clipPath>
    </defs>
    <svg:g
      fill-rule="evenodd"
      clip-path="url(#la-a)"
      transform="translate(-128)scale(.72249)"
    >
      <svg:path fill="#ce1126" d="M0 0h1063v708.7H0z" />
      <svg:path fill="#002868" d="M0 176h1063v356.6H0z" />
      <svg:path
        fill="#fff"
        d="M684.2 354.3a152.7 152.7 0 1 1-305.4 0 152.7 152.7 0 0 1 305.4 0"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiLaFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
