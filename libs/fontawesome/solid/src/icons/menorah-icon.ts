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
  selector: 'svg[si-menorah-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M20.8 7.4C22.8 2.9 27.1 0 32 0s9.2 2.9 11.2 7.4L61.3 49.7c1.8 4.1 2.7 8.6 2.7 13.1L64 64c0 17.7-14.3 32-32 32S0 81.7 0 64l0-1.2c0-4.5 .9-8.9 2.7-13.1L20.8 7.4zm96 0C118.8 2.9 123.1 0 128 0s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1l0 1.2c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-1.2c0-4.5 .9-8.9 2.7-13.1L116.8 7.4zm77.8 42.4L212.8 7.4C214.8 2.9 219.1 0 224 0s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1l0 1.2c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-1.2c0-4.5 .9-8.9 2.7-13.1zM308.8 7.4C310.8 2.9 315.1 0 320 0s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1l0 1.2c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-1.2c0-4.5 .9-8.9 2.7-13.1L308.8 7.4zm77.8 42.4L404.8 7.4C406.8 2.9 411.1 0 416 0s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1l0 1.2c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-1.2c0-4.5 .9-8.9 2.7-13.1zM500.8 7.4C502.8 2.9 507.1 0 512 0s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1l0 1.2c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-1.2c0-4.5 .9-8.9 2.7-13.1L500.8 7.4zm77.8 42.4L596.8 7.4C598.8 2.9 603.1 0 608 0s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1l0 1.2c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-1.2c0-4.5 .9-8.9 2.7-13.1zM32 128c17.7 0 32 14.3 32 32l0 128c0 17.7 14.3 32 32 32l192 0 0-160c0-17.7 14.3-32 32-32s32 14.3 32 32l0 160 192 0c17.7 0 32-14.3 32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 53-43 96-96 96l-192 0 0 64 128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0-160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0 0-64L96 384c-53 0-96-43-96-96L0 160c0-17.7 14.3-32 32-32zm96 0c17.7 0 32 14.3 32 32l0 96 0 32-64 0 0-32 0-96c0-17.7 14.3-32 32-32zm96 0c17.7 0 32 14.3 32 32l0 96 0 32-64 0 0-32 0-96c0-17.7 14.3-32 32-32zm192 0c17.7 0 32 14.3 32 32l0 96 0 32-64 0 0-32 0-96c0-17.7 14.3-32 32-32zm96 0c17.7 0 32 14.3 32 32l0 96 0 32-64 0 0-32 0-96c0-17.7 14.3-32 32-32z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMenorahIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 512');
  }
}
