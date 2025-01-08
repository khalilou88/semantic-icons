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
  selector: 'svg[si-chart-scatter-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    <svg:circle cx="18.5" cy="5.5" r=".5" fill="currentColor" />
    <svg:circle cx="11.5" cy="11.5" r=".5" fill="currentColor" />
    <svg:circle cx="7.5" cy="16.5" r=".5" fill="currentColor" />
    <svg:circle cx="17.5" cy="14.5" r=".5" fill="currentColor" />
    <svg:path d="M3 3v16a2 2 0 0 0 2 2h16" />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiChartScatterIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  readonly class = input<string>('');

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
    this.render.setAttribute(svg, 'stroke', 'currentColor');
    this.render.setAttribute(svg, 'stroke-width', '2');
    this.render.setAttribute(svg, 'stroke-linecap', 'round');
    this.render.setAttribute(svg, 'stroke-linejoin', 'round');
  }
}
