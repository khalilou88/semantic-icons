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
  selector: 'svg[si-pie-chart-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11 3.18v17.64c0 .64-.59 1.12-1.21.98C5.32 20.8 2 16.79 2 12s3.32-8.8 7.79-9.8a.998.998 0 0 1 1.21.98zm2.03 0v6.81c0 .55.45 1 1 1h6.79c.64 0 1.12-.59.98-1.22-.85-3.76-3.8-6.72-7.55-7.57-.63-.14-1.22.34-1.22.98zm0 10.83v6.81c0 .64.59 1.12 1.22.98 3.76-.85 6.71-3.82 7.56-7.58.14-.62-.35-1.22-.98-1.22h-6.79c-.56.01-1.01.46-1.01 1.01z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPieChartIcon implements OnInit {
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
