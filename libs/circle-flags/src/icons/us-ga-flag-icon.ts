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
  selector: 'svg[si-us-ga-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#d80027" d="M512 0v171l-64 85 64 85v171H0V341L341 0Z" />
      <svg:path fill="#eee" d="M341 171h171v170H341l-64-85z" />
      <svg:path fill="#0052b4" d="M0 0h341v341H0Z" />
      <svg:path
        fill="#ffda44"
        d="M184 133a40 40 0 0 0-40 40v60h80v-60a40 40 0 0 0-40-40z"
      />
      <svg:path
        fill="#eee"
        d="m167 105 52-37h-64l52 37-20-61zm101 62 37 52v-64l-37 52 61-20zm-62 101-52 37h64l-52-37 20 61zm-101-61-37-52v64l37-52-61 20zm125-92 63 10-45-45 10 63 29-57zm28 115-10 63 45-45-63 10 57 29zm-115 28-63-10 45 45-10-63-29 57Zm-28-115 10-63-45 45 63-10-57-29Z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiUsGaFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}