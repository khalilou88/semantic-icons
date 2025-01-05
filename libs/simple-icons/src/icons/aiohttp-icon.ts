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
  selector: 'svg[si-aiohttp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>AIOHTTP</svg:title>
    <svg:path
      d="M0 12C.01 5.377 5.377.01 12 0c6.623.01 11.99 5.377 12 12-.01 6.623-5.377 11.99-12 12C5.377 23.99.01 18.623 0 12zm12 11.004a10.948 10.948 0 0 0 6.81-2.367l-.303-.656a.746.746 0 0 1-.621-1.347l-.722-1.563a1.244 1.244 0 0 1-1.543-.734l-2.474.633v.012a.747.747 0 1 1-1.475-.178L8.2 15.31a1.244 1.244 0 0 1-1.278.607l-.748 2.59a.747.747 0 0 1-.17 1.388l.052 1.36A10.935 10.935 0 0 0 12 23.003zM5.75 21.05l-.044-1.142a.747.747 0 0 1 .18-1.482l.749-2.59a1.245 1.245 0 0 1-.759-1.147l-4.674-.566A11.035 11.035 0 0 0 5.75 21.05zm13.3-.608a11.083 11.083 0 0 0 2.74-3.421l-3.826-.751a1.245 1.245 0 0 1-.528.672l.732 1.588a.747.747 0 0 1 .598 1.3l.285.612zm2.878-3.698A10.934 10.934 0 0 0 23.004 12a10.95 10.95 0 0 0-2.492-6.965L19 5.551a.749.749 0 0 1-.726.922.747.747 0 0 1-.682-.442L14.449 7.1a2.492 2.492 0 0 1-1.015 2.737l2.857 4.901a1.245 1.245 0 0 1 1.732 1.236l3.904.77zm-8.846-.068l2.465-.63a1.242 1.242 0 0 1 .486-1.157l-2.856-4.9a2.478 2.478 0 0 1-2.444-.11l-2.77 3.892a1.242 1.242 0 0 1 .354 1.263l3.483 1.497a.746.746 0 0 1 1.282.143v.002zm-7.17-2.284a1.246 1.246 0 0 1 1.81-.794l2.77-3.89a2.484 2.484 0 0 1-.93-1.94c0-.603.219-1.186.617-1.64L6.476 2.487a11.013 11.013 0 0 0-5.33 11.328l4.765.578zm8.44-7.572l3.174-1.083v-.01a.747.747 0 0 1 1.345-.448l1.433-.489A10.982 10.982 0 0 0 6.745 2.333l3.64 3.581a2.49 2.49 0 0 1 3.967.904l-.002.003z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAiohttpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#2C5BB4');
  }
}
