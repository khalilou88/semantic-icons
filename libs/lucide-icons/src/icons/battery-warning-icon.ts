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
  selector: 'svg[si-battery-warning-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M10 17h.01" />
    <svg:path d="M10 7v6" />
    <svg:path d="M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
    <svg:path d="M22 11v2" />
    <svg:path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBatteryWarningIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

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
