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
  selector: 'svg[si-brand-graphql-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M4 8l8 -5l8 5v8l-8 5l-8 -5z" />
    <svg:path d="M12 4l7.5 12h-15z" />
    <svg:path d="M11 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <svg:path d="M11 21a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <svg:path d="M3 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <svg:path d="M3 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <svg:path d="M19 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <svg:path d="M19 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBrandGraphqlIcon implements OnInit {
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
