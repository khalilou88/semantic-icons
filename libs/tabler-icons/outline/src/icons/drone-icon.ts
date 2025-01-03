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
  selector: 'svg[si-drone-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M10 10h4v4h-4z" />
    <svg:path d="M10 10l-3.5 -3.5" />
    <svg:path d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96" />
    <svg:path d="M14 10l3.5 -3.5" />
    <svg:path d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96" />
    <svg:path d="M14 14l3.5 3.5" />
    <svg:path d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96" />
    <svg:path d="M10 14l-3.5 3.5" />
    <svg:path d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDroneIcon implements OnInit {
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
