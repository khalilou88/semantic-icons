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
  selector: 'svg[si-americanairlines-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>American Airlines</svg:title>
    <svg:path
      d="M0 .244h3.264c1.377 0 1.942.563 2.499 1.116.637.58 2.57 3.196 6.657 8.303H7.997c-1.809 0-2.38-.308-3.08-1.375zm10.424 17.072l-2.427-4.013c-.292-.455-.372-.854-.372-1.318 0-.51.217-.79 1.053-1.233.973-.466 2.933-.67 4.954-.67 3.283 0 4.07 1.055 4.405 2.192 0 0-.464-.185-1.554-.185-3.459 0-6.223 1.68-6.223 4.221 0 .534.164 1.006.164 1.006zm4.936-3.417c-2.547.089-5.032 1.869-4.936 3.416l2.7 4.486c.836 1.344 2.215 1.955 3.932 1.955H24l-8.13-9.852a5.55 5.55 0 0 0-.51-.005Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAmericanairlinesIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#0078D2');
  }
}
