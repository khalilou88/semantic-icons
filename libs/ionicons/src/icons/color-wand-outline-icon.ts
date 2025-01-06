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
  selector: 'svg[si-color-wand-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
      x="280.48"
      y="122.9"
      width="63.03"
      height="378.2"
      rx="31.52"
      transform="rotate(-45 312.002 311.994)"
    />
    <svg:path
      d="M178.38 178.38a31.64 31.64 0 000 44.75L223.25 268 268 223.25l-44.87-44.87a31.64 31.64 0 00-44.75 0z"
    />
    <svg:path
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
      stroke-linecap="round"
      d="M48 192h48M90.18 90.18l33.94 33.94M192 48v48M293.82 90.18l-33.94 33.94M124.12 259.88l-33.94 33.94"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiColorWandOutlineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
