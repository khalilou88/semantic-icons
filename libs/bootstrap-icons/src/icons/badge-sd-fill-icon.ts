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
  selector: 'svg[si-badge-sd-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.338 5.968h-.844v4.06h.844c1.116 0 1.622-.667 1.622-2.02 0-1.354-.51-2.04-1.622-2.04"
    />
    <svg:path
      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.077 7.114c1.521 0 2.378-.764 2.378-1.88 0-1.007-.642-1.473-1.613-1.692l-.932-.216c-.527-.114-.821-.351-.821-.712 0-.466.39-.804 1.046-.804.637 0 1.028.33 1.103.76h1.125c-.058-.923-.849-1.692-2.22-1.692-1.322 0-2.24.717-2.24 1.815 0 .91.588 1.446 1.52 1.657l.927.215c.624.145.923.36.923.778 0 .492-.391.83-1.13.83-.707 0-1.155-.342-1.234-.808H2.762c.052.95.79 1.75 2.315 1.75ZM8.307 11h2.19c1.81 0 2.684-1.107 2.684-3.015 0-1.894-.861-2.984-2.685-2.984H8.308z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBadgeSdFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '16');
    this.render.setAttribute(svg, 'height', '16');
    this.render.setAttribute(svg, 'viewBox', '0 0 16 16');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
