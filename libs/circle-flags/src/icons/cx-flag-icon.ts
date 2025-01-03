import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-cx-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#6da544" d="m0 0 216.9 301.6L512 512V0z" />
      <svg:path fill="#0052b4" d="m0 0 512 512H0z" />
      <svg:circle cx="256" cy="256" r="66.8" fill="#ffda44" />
      <svg:path
        fill="#eee"
        d="m95.3 367.3 7 14.7 16-3.7L111 393l13 10-16 3.6.1 16.3-12.7-10.2L82.6 423v-16.3L66.9 403l12.6-10-7-14.7 15.8 3.7zM49.3 245l7.1 14.7 15.9-3.7-7.1 14.6 12.7 10.2-15.9 3.5v16.3l-12.6-10.2-12.7 10.2v-16.3l-15.9-3.5 12.8-10.2-7.1-14.6 15.8 3.7zm46-100.2 7 14.7 16-3.7-7.2 14.7 12.8 10-16 3.7.1 16.2-12.7-10.1-12.7 10.1v-16.2l-15.8-3.6 12.7-10.1-7-14.7 15.8 3.7zm57.1 78 7 14.6 15.9-3.7-7.1 14.7 12.7 10.1-15.8 3.6v16.3L152.4 268l-12.7 10.2V262l-15.8-3.6 12.7-10.1-7-14.7 15.8 3.7zm-40.8 66.7 5.5 17H135L120.5 317l5.6 17-14.5-10.5L97 333.9l5.6-17-14.5-10.5H106z"
      />
      <svg:path
        fill="#6da544"
        d="M256 300.5h22.3s9.6-17 0-33.4l22.2-22.2-11.1-22.3h-11.1s-5.6 16.7-27.9 16.7-27.8-16.7-27.8-16.7h-11.1l11.1 22.3-11.1 22.2 11.1 11.2S233.7 256 256 267c0 0 9.5 14 0 33.4z"
      />
      <svg:path
        fill="#ffda44"
        d="M422.2 140.2a44.7 44.7 0 0 0-30-50.8 83.1 83.1 0 0 1 7.5 49.9 45.6 45.6 0 0 0-10.4-11.6 45.7 45.7 0 0 0-53.7-2.4 85.3 85.3 0 0 1 35 16.7c8.3 6.6 15 15.5 20.2 24.1l-68 21.3c66.8 11.2 122.4-33.4 122.4-33.4-6.1-12.3-15.7-14.4-23-13.8z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCxFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}