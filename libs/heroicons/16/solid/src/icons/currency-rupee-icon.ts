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
  selector: 'svg[si-currency-rupee-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM4.75 4a.75.75 0 0 0 0 1.5H6.5c.698 0 1.3.409 1.582 1H4.75a.75.75 0 0 0 0 1.5h3.332C7.8 8.591 7.198 9 6.5 9H4.75a.75.75 0 0 0-.53 1.28l2.5 2.5a.75.75 0 0 0 1.06-1.06L6.56 10.5A3.251 3.251 0 0 0 9.663 8h1.587a.75.75 0 0 0 0-1.5H9.663a3.232 3.232 0 0 0-.424-1h2.011a.75.75 0 0 0 0-1.5h-6.5Z"
      clip-rule="evenodd"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCurrencyRupeeIcon implements OnInit {
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
