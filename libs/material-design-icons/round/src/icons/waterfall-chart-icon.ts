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
  selector: 'svg[si-waterfall-chart-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.5 4c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-13c0-.83.67-1.5 1.5-1.5zm-15 9c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5S3 19.33 3 18.5v-4c0-.83.67-1.5 1.5-1.5zm11-9c.83 0 1.5.67 1.5 1.5S16.33 7 15.5 7 14 6.33 14 5.5 14.67 4 15.5 4zm-4 1c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5S10 8.33 10 7.5v-1c0-.83.67-1.5 1.5-1.5zm-3 5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5S7 13.33 7 12.5v-1c0-.83.67-1.5 1.5-1.5z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWaterfallChartIcon implements OnInit {
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
