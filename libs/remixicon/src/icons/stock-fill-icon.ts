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
  selector: 'svg[si-stock-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.00488 5.00281H11.0049V14.0028H8.00488V17.0028H6.00488V14.0028H3.00488V5.00281H6.00488V2.00281H8.00488V5.00281ZM18.0049 10.0028H21.0049V19.0028H18.0049V22.0028H16.0049V19.0028H13.0049V10.0028H16.0049V7.00281H18.0049V10.0028Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiStockFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
