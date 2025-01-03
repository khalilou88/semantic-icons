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
  selector: 'svg[si-tg-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="tg-a">
        <svg:path fill-opacity=".7" d="M0-.2h496.3V496H0z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      clip-path="url(#tg-a)"
      transform="translate(0 .3)scale(1.0316)"
    >
      <svg:path fill="#ffe300" d="M0-.2h744V496H0z" />
      <svg:path fill="#118600" d="M0 201.5h744v99.7H0zM0 0h744v99.7H0z" />
      <svg:path fill="#d80000" d="M0 0h297.1v301.2H0z" />
      <svg:path
        fill="#fff"
        d="M130.3 124.3c0-.9 18.3-51.5 18.3-51.5l16.6 50.6s55.6 1.7 55.6.8-44 33.2-44 33.2 20.7 58.1 19.9 56.5c-.8-1.7-48.1-34.9-48.1-34.9s-48.2 33.2-47.3 33.2 18.2-54.7 18.2-54.7L76.4 125z"
      />
      <svg:path fill="#118600" d="M0 396.4h744v99.7H0z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTgFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
