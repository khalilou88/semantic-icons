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
  selector: 'svg[si-pk-sd-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#496e2d" d="M0 0h512v512H0z" />
      <svg:ellipse cx="256" cy="284" fill="#eee" rx="140" ry="132" />
      <svg:ellipse cx="256" cy="249" fill="#496e2d" rx="122" ry="111" />
      <svg:path
        fill="#eee"
        d="M256.8 149.6h-1.6c-.3 8.5-4.7 15-11.3 20.9-6.6 5.9-15.4 11.1-24.1 17a95.8 95.8 0 0 0-24 21.6 55.3 55.3 0 0 0-10.8 34.5c0 14.4 4.5 25.3 11.1 34a99 99 0 0 0 24.2 21.3c8.8 6 17.5 11.2 24 17.2a32 32 0 0 1 10 15.1c.4 2.1.8 4.2 1 6.5h1.5c.1-2.3.5-4.4.9-6.4a32 32 0 0 1 10-15.2c6.5-6 15.2-11.2 24-17.2a99 99 0 0 0 24.2-21.2c6.6-8.8 11-19.7 11-34a55.4 55.4 0 0 0-10.7-34.6 96 96 0 0 0-24-21.5c-8.8-6-17.5-11.2-24.1-17.1-6.6-6-11-12.4-11.3-21z"
      />
      <svg:path
        fill="#eee"
        d="M262.6 117.8h29l-23 15.3 9 23.4-22.3-14.7h-.1l-22 14.6 8.3-24-21.2-14.6h26.2l7.6-22.2zm56.6 28.9c-2 4.4-3.1 9.6-3 13.8-2.6-1.5-10.4-5-12.8-5.5.1 5.8 1.9 12 4.7 16-6-.7-11.2.3-15.7 2 9.6 13 20.4 14.8 34 10.8a26 26 0 0 0 2.7 12.5 30.6 30.6 0 0 0-15.8-.3c6.8 12.6 17.9 18.5 31 15.7a22.6 22.6 0 0 0-2.3 13 30.7 30.7 0 0 0-14.6-6.1c3.9 16 12.3 22 23.4 26.6-3.6 1.5-7.8 10.3-8.1 11.4a30.6 30.6 0 0 0-10.7-11.7c-4.2 13-1.5 25.3 9 32.6-1.1-1.1-8 4.7-9.3 6.4a30.6 30.6 0 0 0-5.4-14.8c-8.7 10.2-11 22.4-4.5 33a26.2 26.2 0 0 0-9 4.4 30.6 30.6 0 0 0-2.6-15.6c-9.5 7.4-13.7 22.4-10.7 31.4-3.8 0-7.5.7-10.9 2.2a30.7 30.7 0 0 0 1.2-15.8c-13.5 6.5-19.5 17.4-17.2 30.9l-9.7 4 4.7 2.2 6.4-3.6c13.6 6.5 26.6 6.5 36.4-2-4-2.8-8.8-5-13-5.6a25.9 25.9 0 0 0 6.1-7.5c12.6 6.3 26.3 1.3 34-10.2a31.4 31.4 0 0 0-13.9-2.5 25.9 25.9 0 0 0 4.1-8.3c13.5 1.5 26-4.3 30.3-16.6-4.8-1-10.1-1-14.1.1.9-1.2 2.5-9.7 2.6-10.8 14.2-4.4 22.2-12.6 22.6-27.2-4.8.9-9.7 3-13 5.5a71.3 71.3 0 0 0-2-11.8 30.1 30.1 0 0 0 9.8-36 31 31 0 0 0-9.5 10.4c.4-1-4.3-8.6-6.8-9.9 7.7-12 5.3-26.8-4-36-2.6 4-4.5 9-4.9 13.2-1.4-3-7.7-5.8-10-6.7 3.4-14.4 2.7-24.6-9.5-33.6zm-126.4 0c2 4.4 3.1 9.6 3 13.8 2.6-1.5 10.5-5 12.8-5.5-.1 5.8-1.9 12-4.7 16 6-.7 11.2.3 15.7 2-9.6 13-20.4 14.8-34 10.8a26 26 0 0 1-2.7 12.5 30.6 30.6 0 0 1 15.8-.3c-6.8 12.6-17.9 18.5-31 15.7a22.6 22.6 0 0 1 2.3 13 30.7 30.7 0 0 1 14.6-6.1c-3.9 16-12.3 22-23.4 26.6 3.6 1.5 7.8 10.3 8.1 11.4a30.6 30.6 0 0 1 10.7-11.7c4.2 13 1.5 25.3-9 32.6 1.1-1.1 8 4.7 9.3 6.4a30.6 30.6 0 0 1 5.4-14.8c8.7 10.2 11 22.4 4.5 33a26.2 26.2 0 0 1 9 4.4 30.6 30.6 0 0 1 2.6-15.6c9.5 7.4 13.7 22.4 10.7 31.4 3.8 0 7.5.7 10.9 2.2a30.6 30.6 0 0 1-1.2-15.8c13.5 6.5 19.5 17.4 17.2 30.9l9.7 4-4.7 2.2-6.4-3.6c-13.6 6.5-26.6 6.5-36.4-2 4-2.8 8.8-5 13-5.6a25.9 25.9 0 0 1-6.1-7.5c-12.6 6.3-26.3 1.3-34-10.2 4.5-2 9.7-2.9 13.9-2.5a25.9 25.9 0 0 1-4.1-8.3c-13.5 1.5-26-4.3-30.3-16.6 4.8-1 10.1-1 14.1.1-.9-1.2-2.5-9.7-2.6-10.8-14.2-4.4-22.2-12.6-22.6-27.2 4.8.9 9.7 3 13 5.5.2-2.7 1.4-10.2 2-11.8a30.1 30.1 0 0 1-9.8-36 31 31 0 0 1 9.5 10.4c-.4-1 4.3-8.6 6.8-9.9a28.7 28.7 0 0 1 4-36c2.6 4 4.5 9 4.9 13.2 1.4-3 7.8-5.8 10-6.7-3.4-14.4-2.7-24.6 9.5-33.6z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiPkSdFlagIcon implements OnInit {
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
