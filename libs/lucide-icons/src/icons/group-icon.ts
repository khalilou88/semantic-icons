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
  selector: 'svg[si-group-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M3 7V5c0-1.1.9-2 2-2h2" />
    <svg:path d="M17 3h2c1.1 0 2 .9 2 2v2" />
    <svg:path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
    <svg:path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
    <svg:rect width="7" height="5" x="7" y="7" rx="1" />
    <svg:rect width="7" height="5" x="10" y="12" rx="1" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGroupIcon implements OnInit {
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
