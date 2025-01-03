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
  selector: 'svg[si-topology-star-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M7.5 7.5l3 3" />
    <svg:path d="M7.5 16.5l3 -3" />
    <svg:path d="M13.5 13.5l3 3" />
    <svg:path d="M16.5 7.5l-3 3" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTopologyStarIcon implements OnInit {
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
