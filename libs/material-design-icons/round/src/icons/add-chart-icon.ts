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
  selector: 'svg[si-add-chart-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16 17c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1z"
    />
    <svg:path
      d="M20 10c-.55 0-1 .45-1 1v8H5V5h8c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-.55-.45-1-1-1z"
    />
    <svg:path
      d="M7 11v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1zm4-3v8c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1zm5-1h1v1c0 .55.45 1 1 1s1-.45 1-1V7h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V4c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAddChartIcon implements OnInit {
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
