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
  selector: 'svg[si-sitemap-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M2 16.667a2.667 2.667 0 0 1 2.667 -2.667h2.666a2.667 2.667 0 0 1 2.667 2.667v2.666a2.667 2.667 0 0 1 -2.667 2.667h-2.666a2.667 2.667 0 0 1 -2.667 -2.667z"
    />
    <svg:path
      d="M14 16.667a2.667 2.667 0 0 1 2.667 -2.667h2.666a2.667 2.667 0 0 1 2.667 2.667v2.666a2.667 2.667 0 0 1 -2.667 2.667h-2.666a2.667 2.667 0 0 1 -2.667 -2.667z"
    />
    <svg:path
      d="M8 4.667a2.667 2.667 0 0 1 2.667 -2.667h2.666a2.667 2.667 0 0 1 2.667 2.667v2.666a2.667 2.667 0 0 1 -2.667 2.667h-2.666a2.667 2.667 0 0 1 -2.667 -2.667z"
    />
    <svg:path
      d="M12 8a1 1 0 0 0 -1 1v2h-3c-1.645 0 -3 1.355 -3 3v1a1 1 0 0 0 1 1a1 1 0 0 0 1 -1v-1c0 -.564 .436 -1 1 -1h8c.564 0 1 .436 1 1v1a1 1 0 0 0 1 1a1 1 0 0 0 1 -1v-1c0 -1.645 -1.355 -3 -3 -3h-3v-2a1 1 0 0 0 -1 -1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSitemapIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
