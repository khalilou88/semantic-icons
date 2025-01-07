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
  selector: 'svg[si-stacked-line-chart-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m2 19.99 7.5-7.51 4 4 7.09-7.97L22 9.92l-8.5 9.56-4-4-6 6.01-1.5-1.5zm1.5-4.5 6-6.01 4 4L22 3.92l-1.41-1.41-7.09 7.97-4-4L2 13.99l1.5 1.5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiStackedLineChartIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
