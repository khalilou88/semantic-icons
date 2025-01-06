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
  selector: 'svg[si-boat-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M416 473.14a6.83 6.83 0 00-3.57-6c-27.07-14.55-51.76-36.82-62.62-48a10.05 10.05 0 00-12.72-1.51c-50.33 32.42-111.61 32.44-161.95.05a10.09 10.09 0 00-12.82 1.56c-10.77 11.28-35.19 33.3-62.43 47.75a7.11 7.11 0 00-3.89 5.73 6.73 6.73 0 007.92 7.15c20.85-4.18 41-13.68 60.2-23.83a8.71 8.71 0 018-.06 185.14 185.14 0 00167.81 0 8.82 8.82 0 018.09.06c19.1 10 39.22 19.59 60 23.8a6.73 6.73 0 008-6.71zM476.71 246.91c-3.49-8.39-10.9-14.89-20.9-18.35L432 219.08V136a64 64 0 00-64-64h-32v-8a40 40 0 00-40-40h-80a40 40 0 00-40 40v8h-32a64 64 0 00-64 64v83.15l-23.58 9.39c-9.94 3.3-17.63 10-21.15 18.44-2.45 5.89-5.25 15-1.3 26.46l.1.3 46.66 119.44A23.33 23.33 0 00102.58 408c.5 0 1 0 1.53-.05 31.32-2 56-17.27 72.6-31.61C200.42 396.81 228.31 408 256 408s55.43-11.2 79.14-31.7c16.59 14.36 41.3 29.67 72.61 31.65a23.36 23.36 0 0023.37-14.74l46.65-119c3.28-8.09 2.9-17.76-1.06-27.3zM269 154.21l-1.14-.4a39.53 39.53 0 00-23.73 0l-.58.18-126.07 50.23a4 4 0 01-5.48-3.72V136a32 32 0 0132-32h224a32 32 0 0132 32v64.44a4 4 0 01-5.48 3.72z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBoatIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
