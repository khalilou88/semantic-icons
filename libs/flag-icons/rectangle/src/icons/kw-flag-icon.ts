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
  selector: 'svg[si-kw-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="kw-a">
        <svg:path fill-opacity=".7" d="M0 0h682.7v512H0z" />
      </clipPath>
    </defs>
    <g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#kw-a)"
      transform="scale(.9375)"
    >
      <svg:path fill="#fff" d="M0 170.6h1024v170.7H0z" />
      <svg:path fill="#f31830" d="M0 341.3h1024V512H0z" />
      <svg:path fill="#00d941" d="M0 0h1024v170.7H0z" />
      <svg:path fill="#000001" d="M0 0v512l255.4-170.7.6-170.8z" />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiKwFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
