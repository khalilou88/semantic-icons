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
  selector: 'svg[si-signal-messenger-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M256 0c13.3 0 26.3 1 39.1 3l-3.7 23.7C279.9 24.9 268 24 256 24s-23.9 .9-35.4 2.7L216.9 3C229.7 1 242.7 0 256 0zm60.8 7.3l-5.7 23.3c23.4 5.7 45.4 14.9 65.4 27.1l12.5-20.5c-22.1-13.4-46.4-23.6-72.2-29.9zm90.5 42.2L393.1 68.8c19.1 14 36 30.9 50.1 50.1l19.4-14.2C447 83.6 428.4 65 407.3 49.5zm67.5 73.6l-20.5 12.5c12.2 20 21.4 42 27.1 65.4l23.3-5.7c-6.3-25.8-16.5-50.1-29.9-72.2zM509 216.9l-23.7 3.7c1.8 11.5 2.7 23.4 2.7 35.4s-.9 23.9-2.7 35.4l23.7 3.7c1.9-12.7 3-25.8 3-39.1s-1-26.3-3-39.1zM454.3 376.5c12.2-20 21.4-42 27.1-65.4l23.3 5.7c-6.3 25.8-16.5 50.1-29.9 72.2l-20.5-12.5zm-11.1 16.6l19.4 14.2c-15.5 21.1-34.1 39.8-55.2 55.2l-14.2-19.4c19.1-14 36-30.9 50.1-50.1zm-66.7 61.2l12.5 20.5c-22.1 13.4-46.4 23.6-72.2 29.9l-5.7-23.3c23.4-5.7 45.4-14.9 65.4-27.1zm-85.1 31l3.7 23.7c-12.7 1.9-25.8 3-39.1 3s-26.3-1-39.1-3l3.7-23.7c11.5 1.8 23.4 2.7 35.4 2.7s23.9-.9 35.4-2.7zm-90.5-3.9l-5.7 23.3c-19.4-4.7-37.9-11.6-55.3-20.5l-24.3 5.7-5.5-23.4 32.8-7.7 7.8 4c15.7 8 32.5 14.3 50.1 18.6zM90 471.3l5.5 23.4-41.6 9.7C26 510.8 1.2 486 7.6 458.2l9.7-41.6L40.7 422 31 463.7c-2.4 10.4 6.9 19.7 17.3 17.3L90 471.3zM45.5 401.8l-23.4-5.5L27.8 372C18.9 354.7 12 336.1 7.3 316.7l23.3-5.7c4.3 17.6 10.6 34.4 18.6 50.1l4 7.8-7.7 32.8zM26.7 291.4L3 295.1C1 282.3 0 269.3 0 256s1-26.3 3-39.1l23.7 3.7C24.9 232.1 24 244 24 256s.9 23.9 2.7 35.4zm3.9-90.5L7.3 195.2c6.3-25.8 16.5-50.1 29.9-72.2l20.5 12.5c-12.2 20-21.4 42-27.1 65.4zm38.3-82.1L49.5 104.7C65 83.6 83.6 65 104.7 49.5l14.2 19.4c-19.1 14-36 30.9-50.1 50.1zm66.7-61.2L123.1 37.2c22.1-13.4 46.4-23.6 72.2-29.9l5.7 23.3c-23.4 5.7-45.4 14.9-65.4 27.1zM464 256c0 114.9-93.1 208-208 208c-36.4 0-70.7-9.4-100.5-25.8c-2.9-1.6-6.2-2.1-9.4-1.4L53.6 458.4l21.6-92.5c.7-3.2 .2-6.5-1.4-9.4C57.4 326.7 48 292.4 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSignalMessengerIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
