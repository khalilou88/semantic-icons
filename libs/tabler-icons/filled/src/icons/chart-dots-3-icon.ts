import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-chart-dots-3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M18 2a4 4 0 1 1 -3.843 5.114l-6.295 .786a3 3 0 0 1 -.094 .257l6.446 4.431a3 3 0 1 1 -.695 4.099l-3.527 1.058q .008 .127 .008 .255a4 4 0 1 1 -8 0l.005 -.2a4 4 0 0 1 7.366 -1.954l3.64 -1.094l.01 -.102q .023 -.204 .074 -.4l-6.688 -4.6a3 3 0 0 1 -4.407 -2.65l.005 -.176a3 3 0 0 1 5.784 -.931l6.312 -.79a4 4 0 0 1 3.899 -3.103"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiChartDots3Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', this.width());
    this.render.setAttribute(svg, 'height', this.height());
    this.render.setAttribute(svg, 'viewBox', this.viewBox());
    this.render.setAttribute(svg, 'fill', this.fill());
  }
}
