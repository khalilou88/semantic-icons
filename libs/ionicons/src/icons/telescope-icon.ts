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
  selector: 'svg[si-telescope-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M107.56 250a16 16 0 00-21.85-5.86L36 272.81a39.71 39.71 0 00-18.8 24.91 40.9 40.9 0 004.55 30.35l4.36 7.54a40 40 0 0054.62 14.62l49.67-28.63a16 16 0 005.87-21.86z"
    />
    <svg:path
      d="M382.84 440.8L288.72 254a2 2 0 01.79-2.63l8.3-4.79a16 16 0 005.86-21.86l-47.53-82.33a16 16 0 00-21.86-5.87l-86.38 49.8a39.73 39.73 0 00-18.65 24.28 34.82 34.82 0 00-1.37 9.76c.06 7.6 9.2 22.7 18.12 38.28 9.59 16.75 19.24 33.88 26.34 38.15 4.52 2.72 12.5 4.9 19.21 4.9h.84l-79.32 171.6a16 16 0 1029.05 13.42l93.68-202.65a7.94 7.94 0 013.26-3.57l19.21-11.08a2 2 0 012.78.84l93.21 185a16 16 0 0028.58-14.4zM490.21 115.74L444.09 36a40.08 40.08 0 00-54.63-14.62l-93.34 53.78a39.69 39.69 0 00-18.65 24.28 32.76 32.76 0 00-1.27 13.25c1.74 12.62 13 30.4 26.41 53.89 13.58 23.73 28.91 50.48 36.93 56.27a40.18 40.18 0 0023.18 7.37 39.77 39.77 0 0019.92-5.34L476 171.07a39.72 39.72 0 0018.79-24.84 41 41 0 00-4.58-30.49z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTelescopeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
