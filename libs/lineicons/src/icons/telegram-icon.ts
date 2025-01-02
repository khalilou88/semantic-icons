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
  selector: 'svg[si-telegram-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.936 5.17077L18.9059 19.3546C18.6802 20.3539 18.1 20.5795 17.2618 20.1282L12.7166 16.7757L10.4923 18.9033C10.2666 19.1289 10.041 19.3546 9.5252 19.3546L9.8798 14.6804L18.3578 6.97598C18.7124 6.62138 18.2611 6.49244 17.8098 6.78256L7.26869 13.4232L2.72343 12.037C1.72412 11.7147 1.72412 11.0377 2.94908 10.5864L20.6144 3.72015C21.4847 3.46227 22.2262 3.91357 21.936 5.17077Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTelegramIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
