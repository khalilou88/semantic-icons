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
  selector: 'svg[si-monitor-weight-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 3H3v18h18V3zm-6.8 8.2c-3.23 2.43-6.84-1.18-4.4-4.41 3.23-2.42 6.83 1.19 4.4 4.41z"
    />
    <svg:path d="M10 8.5h1v1h-1zm1.5 0h1v1h-1zm1.5 0h1v1h-1z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMonitorWeightIcon implements OnInit {
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
