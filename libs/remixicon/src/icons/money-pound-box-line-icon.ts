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
  selector: 'svg[si-money-pound-box-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.00488 3.00275H21.0049C21.5572 3.00275 22.0049 3.45046 22.0049 4.00275V20.0027C22.0049 20.555 21.5572 21.0027 21.0049 21.0027H3.00488C2.4526 21.0027 2.00488 20.555 2.00488 20.0027V4.00275C2.00488 3.45046 2.4526 3.00275 3.00488 3.00275ZM4.00488 5.00275V19.0027H20.0049V5.00275H4.00488ZM9.00488 13.0027H8.00488V11.0027H9.00488V10.0027C9.00488 8.06975 10.5719 6.50275 12.5049 6.50275C13.9741 6.50275 15.2319 7.40804 15.7509 8.69125L13.7644 9.18786C13.4971 8.77553 13.0329 8.50275 12.5049 8.50275C11.6765 8.50275 11.0049 9.17432 11.0049 10.0027V11.0027H14.0049V13.0027H11.0049V15.0027H16.0049V17.0027H8.00488V15.0027H9.00488V13.0027Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMoneyPoundBoxLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
