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
        <svg:path fill-opacity=".7" d="M0 0h496v496H0z" />
      </clipPath>
    </defs>
    <svg:g fill-rule="evenodd" clip-path="url(#tl-a)" transform="scale(1.0321)">
      <svg:path fill="#cb000f" d="M0 0h999v496H0z" />
      <svg:path fill="#f8c00c" d="M0 0c3.1 0 496 248.7 496 248.7L0 496.1z" />
      <svg:path fill="#000001" d="M0 0c2 0 330 248.7 330 248.7L0 496.1z" />
      <svg:path
        fill="#fff"
        d="m181.9 288.9-59-13L93 327l-5-57.8-58.8-13 53.1-24-3.2-57.5 39 42 53.6-24.4-28 52.2 38 44.4z"
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
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}