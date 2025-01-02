import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-binary-tree-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M5.058 18.306l2.88 -4.606" />
    <svg:path d="M10.061 10.303l2.877 -4.604" />
    <svg:path d="M10.065 13.705l2.876 4.6" />
    <svg:path d="M15.063 5.7l2.881 4.61" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBinaryTreeIcon implements OnInit {
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
