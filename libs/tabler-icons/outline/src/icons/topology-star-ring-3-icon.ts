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
  selector: 'svg[si-topology-star-ring-3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M6 12h4" />
    <svg:path d="M14 12h4" />
    <svg:path d="M15 7l-2 3" />
    <svg:path d="M9 7l2 3" />
    <svg:path d="M11 14l-2 3" />
    <svg:path d="M13 14l2 3" />
    <svg:path d="M10 5h4" />
    <svg:path d="M10 19h4" />
    <svg:path d="M17 17l2 -3" />
    <svg:path d="M19 10l-2 -3" />
    <svg:path d="M7 7l-2 3" />
    <svg:path d="M5 14l2 3" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTopologyStarRing3Icon implements OnInit {
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
