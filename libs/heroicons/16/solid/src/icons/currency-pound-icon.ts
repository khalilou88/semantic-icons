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
  selector: 'svg[si-currency-pound-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM7.94 4.94c-.294.293-.44.675-.44 1.06v1.25h1.25a.75.75 0 1 1 0 1.5H7.5v1c0 .263-.045.516-.128.75h3.878a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 0 6 9.75v-1H4.75a.75.75 0 0 1 0-1.5H6V6a3 3 0 0 1 5.121-2.121.75.75 0 1 1-1.06 1.06 1.5 1.5 0 0 0-2.121 0Z"
      clip-rule="evenodd"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCurrencyPoundIcon implements OnInit {
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
