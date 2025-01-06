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
  selector: 'svg[si-money-euro-box-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.00488 3.00275H21.0049C21.5572 3.00275 22.0049 3.45046 22.0049 4.00275V20.0027C22.0049 20.555 21.5572 21.0027 21.0049 21.0027H3.00488C2.4526 21.0027 2.00488 20.555 2.00488 20.0027V4.00275C2.00488 3.45046 2.4526 3.00275 3.00488 3.00275ZM4.00488 5.00275V19.0027H20.0049V5.00275H4.00488ZM10.0549 11.0027H15.0049V13.0027H10.0549C10.2865 14.1439 11.2954 15.0027 12.5049 15.0027C13.1201 15.0027 13.6833 14.7806 14.1188 14.412L15.8198 15.546C14.9973 16.4415 13.8166 17.0027 12.5049 17.0027C10.1886 17.0027 8.28107 15.2527 8.03235 13.0027H7.00488V11.0027H8.03235C8.28107 8.75277 10.1886 7.00275 12.5049 7.00275C13.8166 7.00275 14.9973 7.56402 15.8198 8.45951L14.1189 9.59351C13.6834 9.22496 13.1201 9.00275 12.5049 9.00275C11.2954 9.00275 10.2865 9.86163 10.0549 11.0027Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMoneyEuroBoxLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
