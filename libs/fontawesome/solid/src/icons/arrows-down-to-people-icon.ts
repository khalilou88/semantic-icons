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
  selector: 'svg[si-arrows-down-to-people-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M144 0c-13.3 0-24 10.7-24 24l0 118.1L97 119c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23L168 24c0-13.3-10.7-24-24-24zM360 200a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zM184 296a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm312 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM200 441.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-36.3-67.5c1.7-1.7 3.2-3.6 4.3-5.8L264 345.5l0 54.5c0 17.7 14.3 32 32 32l48 0c17.7 0 32-14.3 32-32l0-54.5 26.9 49.9c1.2 2.2 2.6 4.1 4.3 5.8l-36.3 67.5c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L440 441.5l0 38.5c0 17.7 14.3 32 32 32l48 0c17.7 0 32-14.3 32-32l0-38.5 26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3l-19.5 0c-16.3 0-31.9 4.5-45.4 12.6l-33.6-62.3c-15.3-28.5-45.1-46.3-77.5-46.3l-19.5 0c-32.4 0-62.1 17.8-77.5 46.3l-33.6 62.3c-13.5-8.1-29.1-12.6-45.4-12.6l-19.5 0c-32.4 0-62.1 17.8-77.5 46.3L18.9 468.6c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L88 441.5 88 480c0 17.7 14.3 32 32 32l48 0c17.7 0 32-14.3 32-32l0-38.5zM415 153l64 64c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23L520 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 118.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiArrowsDownToPeopleIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 512');
  }
}
