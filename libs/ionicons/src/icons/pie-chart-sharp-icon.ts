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
  selector: 'svg[si-pie-chart-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M58 362.09l-6.51-14.59A224 224 0 01256 32h16v234.37z" />
    <svg:path
      d="M304 66.46v220.65L94.62 380.78A208.31 208.31 0 00272 480c114.69 0 208-93.31 208-208 0-103.81-76.45-190.1-176-205.54z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPieChartSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
