import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-shower-head-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m4 4 2.5 2.5" />
    <svg:path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
    <svg:path d="M15 5 5 15" />
    <svg:path d="M14 17v.01" />
    <svg:path d="M10 16v.01" />
    <svg:path d="M13 13v.01" />
    <svg:path d="M16 10v.01" />
    <svg:path d="M11 20v.01" />
    <svg:path d="M17 14v.01" />
    <svg:path d="M20 11v.01" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiShowerHeadIcon implements OnInit {
  private readonly elementRef = Inject(ElementRef);
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
