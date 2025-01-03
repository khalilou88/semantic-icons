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
  selector: 'svg[si-cg-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="cg-a">
        <svg:path fill-opacity=".7" d="M-79.5 32h640v480h-640z" />
      </clipPath>
    </defs>
    <svg:g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#cg-a)"
      transform="translate(79.5 -32)"
    >
      <svg:path fill="#ff0" d="M-119.5 32h720v480h-720z" />
      <svg:path fill="#00ca00" d="M-119.5 32v480l480-480z" />
      <svg:path fill="red" d="M120.5 512h480V32z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCgFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
