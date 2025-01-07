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
  selector: 'svg[si-show-chart-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m4.2 17.78 5.3-5.3 3.25 3.25c.41.41 1.07.39 1.45-.04l7.17-8.07c.35-.39.33-.99-.04-1.37a1 1 0 0 0-1.45.04l-6.39 7.18-3.29-3.29a.996.996 0 0 0-1.41 0l-6.09 6.1a.996.996 0 0 0 0 1.41l.09.09c.39.39 1.03.39 1.41 0z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiShowChartIcon implements OnInit {
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
