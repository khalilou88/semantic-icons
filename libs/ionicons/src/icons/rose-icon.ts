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
  selector: 'svg[si-rose-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M429.55 119.49a16 16 0 00-17.06-7.1c-18.64 4.19-37.06 9-54.73 14.22-35.06 10.39-69.33 23.92-107.85 42.59-18.62 9.05-26 13.35-48 26.13l-4.5 2.67c-32.95 19-57.09 40-73.79 64.29C105.29 288.89 96 320 96 354.64c0 40.74 15.71 77.1 44.24 102.37C169 482.52 209.06 496 256 496c46.76 0 86.89-14.33 116-41.43 28.35-26.35 44-63.39 44-104.29 0-25-6.19-47-12.17-68.22-12.59-44.69-23.46-83.29 24.71-144.13a16 16 0 001.01-18.44zM219 119.55C168.46 92.08 101.46 80.69 98.63 80.22A16 16 0 0081 90.55a16.47 16.47 0 003.79 16.84c31.84 33.78 32.86 68.79 28.65 104.63a4.45 4.45 0 002.5 4.54 4.44 4.44 0 005.08-.9c16.39-16.51 36.37-31.52 60.4-45.39l4.48-2.6C208 154.8 216.23 150 236 140.41l2.69-1.3a4 4 0 00.64-6.83A178.59 178.59 0 00219 119.55zM234.26 91.45c3.44 1.87 7.09 4 10.9 6.29a189.31 189.31 0 0129.57 22.39 4 4 0 004.28.76 672 672 0 0169.65-25q7-2.07 14.08-4a4 4 0 002.53-5.62c-8.27-16.83-14.67-28.9-15.15-29.79A16 16 0 00336 48c-1.91 0-33.28.36-76.87 21.3a279 279 0 00-26.39 14.51 4 4 0 00.22 6.94zM209.33 60.79c7.3-4.77 14.74-9.22 22.25-13.31a2 2 0 00.24-3.36c-26-19.57-49.73-27-51.15-27.42a16 16 0 00-17.56 5.82 217.63 217.63 0 00-19.28 32.38 2 2 0 001.29 2.81c13.61 3.57 29.4 8.29 45.61 14.29a2 2 0 001.79-.2z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRoseIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
