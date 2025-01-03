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
  selector: 'svg[si-cursor-arrow-ripple-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.038 4.038a5.25 5.25 0 0 0 0 7.424.75.75 0 0 1-1.06 1.061A6.75 6.75 0 1 1 14.5 7.75a.75.75 0 1 1-1.5 0 5.25 5.25 0 0 0-8.962-3.712Z"
    />
    <svg:path
      d="M7.712 7.136a.75.75 0 0 1 .814.302l2.984 4.377a.75.75 0 0 1-.726 1.164l-.76-.109.289 1.075a.75.75 0 0 1-1.45.388l-.287-1.075-.602.474a.75.75 0 0 1-1.212-.645l.396-5.283a.75.75 0 0 1 .554-.668Z"
    />
    <svg:path
      d="M5.805 9.695A2.75 2.75 0 1 1 10.5 7.75a.75.75 0 0 0 1.5 0 4.25 4.25 0 1 0-7.255 3.005.75.75 0 1 0 1.06-1.06Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCursorArrowRippleIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'aria-hidden', 'true');
    this.render.setAttribute(svg, 'data-slot', 'icon');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 16 16');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}