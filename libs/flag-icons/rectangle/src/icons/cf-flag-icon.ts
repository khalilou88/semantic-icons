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
  selector: 'svg[si-cf-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="cf-a">
        <svg:path fill-opacity=".7" d="M-12.4 32h640v480h-640z" />
      </clipPath>
    </defs>
    <svg:g
      fill-rule="evenodd"
      clip-path="url(#cf-a)"
      transform="translate(12.4 -32)"
    >
      <svg:path fill="#00f" d="M-52 32h719.3v119H-52z" />
      <svg:path fill="#ff0" d="M-52 391.6h719.3V512H-52z" />
      <svg:path fill="#009a00" d="M-52 271.3h719.3v120.3H-52z" />
      <svg:path fill="#fff" d="M-52 151h719.3v120.3H-52z" />
      <svg:path fill="red" d="M247.7 32.5h119.9V512H247.7z" />
      <svg:path
        fill="#ff0"
        d="m99.3 137.7-31.5-21.8-31.3 22L47.4 101 16.9 78l38.2-1 12.5-36.3L80.3 77l38.1.7L88.2 101"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCfFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}