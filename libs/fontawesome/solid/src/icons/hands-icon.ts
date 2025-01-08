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
  selector: 'svg[si-hands-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M544 160l-.1 72.6c-.1 52.2-24 101-64 133.1c.1-1.9 .1-3.8 .1-5.7l0-8c0-71.8-37-138.6-97.9-176.7l-60.2-37.6c-8.6-5.4-17.9-8.4-27.3-9.4L248.7 48.8c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8l78 135.1c3.3 5.7 10.7 7.7 16.4 4.4s7.7-10.7 4.4-16.4l-62-107.4c-6.6-11.5-2.7-26.2 8.8-32.8S362 5 368.6 16.5l68 117.8s0 0 0 0s0 0 0 0l43.3 75L480 160c0-17.7 14.4-32 32-32s32 14.4 32 32zM243.9 88.5L268.5 131c-13.9 4.5-26.4 13.7-34.7 27c-.9 1.4-1.7 2.9-2.5 4.4l-28.9-50c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8zm-46.4 63.7l26.8 46.4c.6 6 2.1 11.8 4.3 17.4l-4.7 0-13.3 0s0 0 0 0L179 216l-23-39.8c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8zM260.9 175c9.4-15 29.1-19.5 44.1-10.2l60.2 37.6C416.7 234.7 448 291.2 448 352l0 8c0 83.9-68.1 152-152 152l-176 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l92 0c6.6 0 12-5.4 12-12s-5.4-12-12-12L88 440c-13.3 0-24-10.7-24-24s10.7-24 24-24l124 0c6.6 0 12-5.4 12-12s-5.4-12-12-12L56 368c-13.3 0-24-10.7-24-24s10.7-24 24-24l156 0c6.6 0 12-5.4 12-12s-5.4-12-12-12L88 296c-13.3 0-24-10.7-24-24s10.7-24 24-24l136 0s0 0 0 0s0 0 0 0l93.2 0L271 219.1c-15-9.4-19.5-29.1-10.2-44.1z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHandsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 576 512');
  }
}
