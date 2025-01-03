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
  selector: 'svg[si-route-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="6" cy="19" r="3" />
    <svg:path d="M9 19h8.5c.4 0 .9-.1 1.3-.2" />
    <svg:path d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3" />
    <svg:path d="M15 5h-4.3" />
    <svg:circle cx="18" cy="5" r="3" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRouteOffIcon implements OnInit {
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
