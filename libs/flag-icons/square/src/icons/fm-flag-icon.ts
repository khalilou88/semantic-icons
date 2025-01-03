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
  selector: 'svg[si-fm-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="fm-a">
        <svg:path fill-opacity=".7" d="M244.2 0h496v496h-496z" />
      </clipPath>
    </defs>
    <svg:g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#fm-a)"
      transform="translate(-252)scale(1.032)"
    >
      <svg:path fill="#6797d6" d="M0 0h992.1v496H0z" />
      <svg:path
        fill="#fff"
        d="M507.9 84.5h38.8l-31.5 21.4 12 34.8-31.3-21.5-31.5 21.5 12-34.8L445 84.4h39l12-34.7m12 363h38.8l-31.5-21.5 12-34.8-31.3 21.5-31.5-21.5 12 34.8-31.4 21.5H484l12 34.7M346 230.1l37.2-11.4-23.9 29.8 21.7 29.7-36.3-11.4-23.8 29.8 1.4-36.8-36.4-11.4 37.2-11.3 1.3-36.8m321 29.8-37.1-11.4 23.8 29.7-21.7 29.8 36.4-11.4 23.7 29.8-1.3-36.8 36.4-11.4-37.2-11.3-1.3-36.8"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiFmFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
