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
  selector: 'svg[si-wpressr-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm171.33 158.6c-15.18 34.51-30.37 69.02-45.63 103.5-2.44 5.51-6.89 8.24-12.97 8.24-23.02-.01-46.03.06-69.05-.05-5.12-.03-8.25 1.89-10.34 6.72-10.19 23.56-20.63 47-30.95 70.5-1.54 3.51-4.06 5.29-7.92 5.29-45.94-.01-91.87-.02-137.81 0-3.13 0-5.63-1.15-7.72-3.45-11.21-12.33-22.46-24.63-33.68-36.94-2.69-2.95-2.79-6.18-1.21-9.73 8.66-19.54 17.27-39.1 25.89-58.66 12.93-29.35 25.89-58.69 38.75-88.08 1.7-3.88 4.28-5.68 8.54-5.65 14.24.1 28.48.02 42.72.05 6.24.01 9.2 4.84 6.66 10.59-13.6 30.77-27.17 61.55-40.74 92.33-5.72 12.99-11.42 25.99-17.09 39-3.91 8.95 7.08 11.97 10.95 5.6.23-.37-1.42 4.18 30.01-67.69 1.36-3.1 3.41-4.4 6.77-4.39 15.21.08 30.43.02 45.64.04 5.56.01 7.91 3.64 5.66 8.75-8.33 18.96-16.71 37.9-24.98 56.89-4.98 11.43 8.08 12.49 11.28 5.33.04-.08 27.89-63.33 32.19-73.16 2.02-4.61 5.44-6.51 10.35-6.5 26.43.05 52.86 0 79.29.05 12.44.02 13.93-13.65 3.9-13.64-25.26.03-50.52.02-75.78.02-6.27 0-7.84-2.47-5.27-8.27 5.78-13.06 11.59-26.11 17.3-39.21 1.73-3.96 4.52-5.79 8.84-5.78 23.09.06 25.98.02 130.78.03 6.08-.01 8.03 2.79 5.62 8.27z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWpressrIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 496 512');
  }
}
