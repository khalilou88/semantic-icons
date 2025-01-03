import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-pr-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="pr-a">
        <svg:path fill-opacity=".7" d="M-37.3 0h682.7v512H-37.3z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      clip-path="url(#pr-a)"
      transform="translate(35)scale(.9375)"
    >
      <svg:path fill="#ed0000" d="M-37.3 0h768v512h-768z" />
      <svg:path
        fill="#fff"
        d="M-37.3 102.4h768v102.4h-768zm0 204.8h768v102.4h-768z"
      />
      <svg:path fill="#0050f0" d="m-37.3 0 440.7 255.7L-37.3 511z" />
      <svg:path
        fill="#fff"
        d="M156.4 325.5 109 290l-47.2 35.8 17.6-58.1-47.2-36 58.3-.4 18.1-58 18.5 57.8 58.3.1-46.9 36.3z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPrFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
