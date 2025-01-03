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
  selector: 'svg[si-kz-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#00abc2" d="M0 0h640v480H0z" />
    <svg:g fill="#ffec2d">
      <svg:g transform="matrix(.48 0 0 .48 345.8 201.6)">
        <svg:circle r="134.6" />
        <svg:g id="kz-c">
          <svg:g id="kz-b">
            <svg:path
              id="kz-a"
              d="M0-152.9c8-.1 11-5.1 11-11.1 0-8-11-46.1-11-46.1S-11-172-11-164c0 6 3 11.1 11 11.1"
            />
            <use
              xlink:href="#kz-a"
              width="100%"
              height="100%"
              transform="rotate(90)"
            />
            <use
              xlink:href="#kz-a"
              width="100%"
              height="100%"
              transform="scale(-1)"
            />
            <use
              xlink:href="#kz-a"
              width="100%"
              height="100%"
              transform="rotate(-90)"
            />
          </svg:g>
          <use
            xlink:href="#kz-b"
            width="100%"
            height="100%"
            transform="rotate(22.5)"
          />
          <use
            xlink:href="#kz-b"
            width="100%"
            height="100%"
            transform="rotate(45)"
          />
          <use
            xlink:href="#kz-b"
            width="100%"
            height="100%"
            transform="rotate(67.5)"
          />
        </svg:g>
        <use
          xlink:href="#kz-c"
          width="100%"
          height="100%"
          transform="rotate(11.3)"
        />
      </svg:g>
      <svg:g transform="translate(-172.8)scale(.48)">
        <svg:path
          d="M1075.8 655c-3.5 6.3-5.6 13.6-10 19.3-13.6-12.3-33.2-12-50.4-12.7-14.2-.8-29.6-2.1-40.6-12.2-11.5-9.5-21-21.7-33.8-29.4a83.2 83.2 0 0 1-33.1-15.3c-20.2-16.5-31.8-41-51.6-58-3.7-3.6-8.2-6.5-12.4-9.6-4 1-2.2 9.6-7.1 5.2-2.7-2-9.4-2.1-10 .6 6 8 12.1 17 13 27.2-4.2.4-11.5-.9-13.5.6a84.3 84.3 0 0 0 20.4 21.3c-3.8.6-11.3.3-12.8 1.8a59 59 0 0 0 26.8 14.7c2 2.8-3.1 8.2 1.3 10.6 2.5 1 10.9 2.8 5.1 5.7-4 2.6-2.5 8.9 2.6 8.7 3.2 1.7 10.4 2 11 5-2.9 2.8-11.7 6.2-4.2 9a52 52 0 0 0 23.1 6.7c-4 3.4-9 5.3-13.1 8.5 18.5 10.9 39 18 59.4 25 8 2.6 16.3 5.1 24.7 6.7-24.4-1.4-48-8.6-70.2-18.5-11.5-5-23-9.9-34.8-14.2 5.1-2.7 11.1-3.4 16.5-5.7-11.2-2.2-23.3-3-33-9 1.4-2.8 7-2.9 10.2-4.3 6-1.4 9.6-3 1.3-3.6-8.4-2.3-18-1.3-25.5-6.3.5-3 8.3-2 11.4-3.3 4-.7 8.4-1.3 11.6-4-13-5.3-30-1.5-40.2-13-2.3-4.4 7.3-.9 10-1.6 7 0 14.5 2.2 21.2-.6-19-8.3-39.3-16-53.7-31.4-1.6-2.5-6.4-9.3-2.5-10.1 11.2 1.5 19.3 13.7 31.4 11.8 1.6-2.1-7-5.6-9.2-8.7a229.4 229.4 0 0 1-46.8-51c-.8-6.7 9.5-7.7 12.2-2.6 13.4 13 25.5 28 42.2 36.8 6 2.9-3.4-3.4-4.6-5.7a298.7 298.7 0 0 1-40.9-57.9c-2-3.8-5.1-10.7.7-12.7 5.7-2.9 11.5 1 14.4 6 11.3 14.3 19.7 31.3 33.8 43.2-12-23.3-24.9-48-25.2-74.8.3-5.2.6-13 7.7-12.9 6-.9 5 6.7 7 10.3 5.8 19.8 8.3 41.2 20 58.6-2.5-14.6-6.4-29.7-3.8-44.6.6-5 6-6.4 9.7-3.4 2.9 7 3.5 15.9 6.1 23.5a237 237 0 0 0 93 127.2 244.7 244.7 0 0 0 123.3 42.3c4 .4 8 .5 11.9.7m136.4 91.1c-7.2 4.4-12.8-3.4-18.8-5.7-4.4 2.4-4.8 10.2-8.8 14-4.8 5.5-10.8-1.6-10.3-7-5.8 4.9-8.7 16-18 14.4-4.5-3.6-7.8-11.2-11.2-2.5-2.7 4.2-10 10.2-13.9 3.8-1.2-5.6-4-12.2-7-3.3-2.2 6.4-9 11-15.4 8.2-3.6-2.9 2.8-13.7-1.7-13-6.8 4.6-10.8 15.7-20.3 14.8-3.7-4 2.3-11.1-1.8-15.7-4.7 6.1-10 15.1-18.3 15.7-4-3.2.2-12.5-2.4-13.8-8.4 5-17.4 14.1-28 11.3 4.1-16 21.5-21.5 36-22.7 25.1-3.1 51.5 2.6 75.7-6.5 3.9-2.4 13.3-5.7 10-11.2-3-4.4 7.7-2.7 8.7-7.8-.6-6.4 5-5.5 10.4-6 24.4-1.1 48.5 4 72.8 4.9 1.8 11.8-11.3 20.1-22 16.5-5 .8-12.5-11.6-11-2.6-1 4.8-.4 11-4.7 14.2m-207.4-24.2c5.6 5.1 9.6-1 14.9-3.3a197 197 0 0 0 48.3-27.3c9.2-7.6 17.2-17.5 29.6-20 24.2-7.3 49.9-6.4 74.1-13.2 18.5-25.2 49.8-34.3 76.1-48.8 5.9-1.8 8.2-6.7 10-12 10-15.9 23.7-29.9 39.9-39.5a37.2 37.2 0 0 1 25.4-4.6 42.4 42.4 0 0 1-13.7 26.5c5.9-.1 11-3.8 16.8-3.6 2 10.6-9.4 16.1-15.5 22.7 3.4.8 16.4 1.8 9.3 5.2-9 6.2-19.3 10.5-27.6 17.8 7.7 1.4 8.6 3 .8 5.8-4.3 2.8-12.4 3.8-13.2 9.4 5.8 3.6-2.6 7-5.9 8.2-6.2 1.5-12.8 4.2-4.5 9-3.1 4.7-9.9 5.7-15.4 5.2 1.7 5.4 4.1 11.4-2.8 13.8a107.7 107.7 0 0 1-53.6 22.4c24.5 1.8 49.8-2.7 70.7-16 2.8-3.3 17.3-6.9 9.2-9.6-3.8-1.6-12-3.4-12.6-6.3 11.4-7 25.7-4.5 37.9-8.6.3-4-9.3-2.9-12.9-3.8-8.5-.7-8-2.9.2-3.7 10.4-2.8 22.2-3.3 31-10-7.1-3.4-16.1-.5-23.7-3.2 12.9-5.6 28.1-6.2 39.7-14.7 5.3-5.9-6.8-4-10.3-3.9-7.1 1.3-10.4-2.2-2.3-5.1 13.9-10.3 31.4-16.9 41.2-31.7 2.3-3.3 5.4-13.3-2-9.8-9.6 3.3-18.1 14.1-29.2 10.8 21.8-16.9 42.4-36 57.3-59.3.8-6.8-9.8-7.5-12.5-2.2-14 13.4-26.6 29.3-44.5 37.8a280.6 280.6 0 0 0 43.6-56.4c2.7-6 9.8-13.3 6-20-6.3-5.2-14.1-.4-17.3 5.7-10.9 14.2-19.1 30.7-33 42.3 12.1-23.3 24.8-48.2 25-75 0-5.6-1-13.8-8.6-12.7-6 1-4.5 10-7 14.5-5.4 18.4-8 38.3-19 54.3 2.5-14.9 6.8-30.5 3.5-45.5-1.6-6.8-12.5-3.9-11 2.8-13 65.9-57.3 123.5-115 156.8-26.5 15-56 24.6-86.2 29-8 1.7-16.8.7-24.5 3.5-18.8 14.3-30.1 38.4-53.8 45.9-10.7 5.3-24.5 6.4-32.1 16.2a8.6 8.6 0 0 0-.8 4.2m51.7-10.3c-3.6.2-7.1.6-10.6 1.7-4.7.7-9.2 2.3-13.8 3l-1.9.4-3.1.3a10.9 10.9 0 0 1 0 5.1 6 6 0 0 1-1.4 2c-.6.8-1.3 1.4-2.2 1.8a7 7 0 0 1-2.6.7c-.9 0-1.8 0-2.7-.4-.9-.3-1.7-.8-2.5-1.5l-2.8.5h-2.6l-2.8-1a16.1 16.1 0 0 1-2.6-1.3c-3.4 2-7.2 3.9-9.3 7.4a11 11 0 0 0-1.6 5.3c-.2 2.4.4 4.8 1.4 7 .4.6.7-2.3 1.8-2.7 1.9-1.6 4.3-2.7 6.7-3.3 2-1 1.7 0 .9 1.6-.2.9-1.3 4 .2 2.4a65 65 0 0 1 21.6-4.1c10.6-1.1 21.2-1.4 31.8-1.5l30 .6c4.8.2 9.6 1.2 14.3.4 1.1-.3 2.9-.3 3.6-1-2.2-1.2-4.7-1.3-7-1.6h-19.1c-5.3-.5-10.8-.6-15.8-2.6-1.4-.5-2.6-1.8-3.9-.4a24 24 0 0 1-5.9 1.3c-3.5.2-7-.5-10.2-1.8 2.3-3.2 5.1-6 7.7-9l-6.2-1.3c3.7-2.5 7-5.4 10.6-8"
        />
        <svg:circle cx="1020" cy="720.9" r="2.4" />
        <svg:circle
          cx="1019.8"
          cy="720.5"
          r="1"
          stroke="#ffec2d"
          stroke-width=".4"
        />
      </svg:g>
      <svg:g transform="scale(.48)">
        <svg:g id="kz-f">
          <svg:g id="kz-e">
            <svg:path
              d="M120 73s-9.6-8.2-12.9-4.1c-5.2 6.5 16.2 39 16.2 50.4 0 18.8-12.6 23.9-28 26.5-10.4 1.8-27.3-.7-27.3-.7 3.2-4.3 5.3-5.6 10.6-5.9-6-3-12-9.8-12-20.3 0-16.1 6.6-22.8 6.6-41C73.2 68 65 55 65 55c14.6 1.5 21.8 15 17.7 25.8a7 7 0 0 0 6.3-1.9c1 3-.6 6.5-2.9 9.5 1.8 1 3.2.4 6-.2-.2 3-2 6.4-6.6 9.5 13.2-3.4 21.2 5.7 21.2 15.3 0 7.3-5 12.5-10 12.5-1.6 0-4-.7-5.3-1.7-1 2-.4 4.7.5 6.7-3.6-1-6-3.2-4.3-7.7-2.8-.2-5-1.2-6.5-3 1.5-2 3.8-3 6.5-3-2-4.2.3-6.5 3.6-8.4 0 0-2.1 8.4 3.2 8.4 2.4 0 4.6-.7 4.6-4.3 0-3.1-2.7-7.4-9-7.1-6.2.3-11.3 4.3-11.3 14.3 0 9.2 7.5 13.8 17.3 14 8.8.4 15.5-4.4 15.5-13.5C111.5 108 94 80.4 94 69.6c0-8.1 7.2-12.7 14.4-12.7 9.2 0 17 9.2 17 9.2l-5.4 6.8z"
            />
            <svg:path
              id="kz-d"
              d="M122 292.1c0 20.3-18.2 30.7-32.5 30.7-19.2 0-29.5-11.5-29.5-26.6 0-8.5 1.6-13.9 5.5-22l44.2-91.7a27 27 0 0 0 2-12.2c0-8.2-8-14.9-16.3-15-7.6-.3-16 7-16 15.3 0 10.1 5.3 14.6 10.7 14.6 6.6 0 9.2-2.7 9.2-7.4 0-3.2-1.5-4.6-3.8-4.6-5.7 0-4 7.6-4 7.6a5.2 5.2 0 0 1-3.9-7 10.2 10.2 0 0 1-5.5-3.3c1.5-1.5 3.3-2.6 5.5-3-1.3-4.4.5-6.5 4.3-7.5a7.6 7.6 0 0 0-.5 4.8c6-1.8 15.3 1 15.3 11.4s-7.2 19.1-20.7 17c3.2 1.5 4.8 4.6 5.2 8.1-2.5-1-5.2-1-5.2-1 1.6 2.7 3.8 5 3.7 10.6-2.5-1.2-4.9-3.3-8-2 5 10-1.2 23.6-17 26.8 5.8-6.8 8.6-14 8.6-21.3 0-23.5-6.5-27.4-6.5-43.8a24 24 0 0 1 10.5-19.2v.3A14 14 0 0 1 68 145a62 62 0 0 1 34 .3 25 25 0 0 1 18 12 36 36 0 0 1 0 28.9c-6.3 13-35.7 75.6-44.9 95.2-2 4.2-3.1 8.6-3.1 13.4 0 12 11 16.2 17.2 16.2 7.5 0 15.2-5.7 15.2-12.8 0-4.5-2.5-7.3-6-7.3-8.5 0-8 7.2-6.3 11.8-5.3-2.4-8.3-6.6-7.5-11a14 14 0 0 1-8.4-4.8c2-2.6 4.6-4.6 8.4-4.7-1.7-6.9 3-9.8 7.5-11.4-1.4 5-2.4 10.9 6.3 10.9 6.3 0 11.2 1 14.1 5.2l.7-27c.4-8.1-10.8-8-18-5.5 2.7-9.3 8.2-14.4 21-13.1a10 10 0 0 1-6.4-9.8c0-7.6 6.2-16 10.2-18.5l2 79z"
            />
            <use
              xlink:href="#kz-d"
              width="100%"
              height="100%"
              transform="matrix(1 0 0 -1 0 645)"
            />
          </svg:g>
          <use
            xlink:href="#kz-e"
            width="100%"
            height="100%"
            transform="matrix(-1 0 0 1 240 0)"
          />
        </svg:g>
        <use
          xlink:href="#kz-f"
          width="100%"
          height="100%"
          transform="matrix(1 0 0 -1 0 1000)"
        />
      </svg:g>
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiKzFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
