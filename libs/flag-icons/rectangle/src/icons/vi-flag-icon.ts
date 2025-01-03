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
  selector: 'svg[si-vi-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#fff" d="M0 0h640v480H0z" />
    <svg:path
      fill="#369443"
      stroke="#010002"
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="M204.3 315s-.5-3.6 6.2-6.1c6.6-2.6 7.2-12.2 5.8-18.6 0 0-3.4 6-7.7 8.1 0 0-6.8 3.6-7.2 10.4 0 0 0 2.5-.5 4.5-.3 1-3.4-8.6 2.4-15.8 6-7.3 7.6-13.3 2.9-25 0 0-.5 7-5.1 11.1-4.7 4-5.3 4.4-5.2 14 0 0 0 3.4-1.7 4.5 0 0-3.6-5.3-4.6-8.8-1-3.5-1.4-5 2.8-9 0 0 13.2-8.7 3.7-27.4 0 0-.3 6.4-5 10.2-4.5 3.9-4.2 6.4-4.4 13-.2 6.7-.6 6.2-1.1 7.2 0 0-8.5-15.6-2-23.8 6.5-8.3 10.2-10 3-25.4 0 0 .3 8-5.5 11.8-5.7 4-4.4 13-4.4 13s.4 3.5-.8 6c0 0-8.1-15.9-.4-24.4 6.6-7.3 7-12.4 3.5-22.6 0 0-.4 4.7-4 7.3-3.7 2.6-6.6 5.1-5.9 15 0 0 .3 7-.6 9 0 0-3.4-6.4-4.4-10.5-1-4.2-1.3-6.6 1.2-10.7s12.5-16 .6-33c0 0-.3 5.5-3.4 10.5-3 5-1.6 10.9-1 15.4.7 4.5-1.5 8.9-1.5 8.9s-5.2-9.5-4-20.4c1-11-3.4-20-13.5-26.4 0 0-7.3 17 2.7 25.7 0 0 8.5 8.4 10.7 18.6 0 0-6.5-.6-12.3-12-5.9-11.4-18-9.6-18.8-9.7 0 0 2 17.6 20.6 22.6 0 0 12 2 14.2 10.8 0 0 2 6 2.8 9.2 0 0-3.8-1.5-7.3-6.7-3.5-5-3-5.7-14.8-6.9 0 0-4.7-.5-7.2-3.9 0 0 5 18.6 17.7 18.5 0 0 11.6-1.3 18 14l-2.9-2c-1.7-1.1-6-3.3-14.5-2.3s-10.9-.4-13-1c0 0 8.6 15.7 20.7 11 12.2-4.7 18 12.4 18.2 12.7 0 0-1.7-1.2-3.8-3.3-2.2-2.1-6.6-4.7-15-2 0 0-6.1 2.3-12.3.4 0 0 6 11.5 19.8 9.5a15.1 15.1 0 0 1 17.3 10.2s-1.8-1-3-2c-1.3-1-6-3.7-16-.8-10 3-13.6-.4-13.6-.4s5.5 10 16.2 11.3c0 0 6-.1 8.4-1 2.5-1 9.2-2.5 13.8 4.2 0 0-1.3.2-3.2-.7 0 0-7-2.5-12.5 2 0 0-4.8 4.9-11.6 4 0 0 8.8 8.5 22.8 1.3 0 0 4.7-3.4 8.2-.8 3.5 2.7 11.5-2.6 11.5-2.6z"
    />
    <svg:g
      fill="#f4c53d"
      stroke="#010002"
      stroke-miterlimit="10"
      stroke-width="1.5"
    >
      <svg:path
        d="M282.2 103.7s-1.6-14.5 10-16a38 38 0 0 1 18 1.2l5.5 10.6-2 7.2-7.4 3.4s1.3-11-8.8-11.2c-2.6 0-4 1-8.1.3s-6.3 3.8-7.2 4.5z"
      />
      <svg:path
        d="M363.8 139.6c-1.8 2.2-8.7 3-8.7 3s7.1 5.5 10.2 13.3c3 7.7-82.4 0-82.4 0s3.8-2.6 6.3-7.6c0 0-3.8 1.4-7.6-2.4 0 0 2.8 1 6.5-4.6 0 0 5.5-7 9.4-9 0 0-1.8 1.2-6.1-1.2 0 0 7.4-1 10-13.5 0 0 .5-2.8 3.3-7 2.8-4 2.2.9 7.4-5.4 0 0 2.4-4.4.3-7-2-2.8-4.3-1.8-8.6-4.4-4.4-2.6-6.3-4-4.8-8s5.3-3.4 5.9-3.4.8-3.5 5.5-5.9 17.4-1.3 19.2-.3c2 1 9.5 3.3 14 14.5 4.4 11.2-1.2 15.4 10.8 32.4 0 0-4.8 1-7.9 0 0 0 6.3 11.2 17.3 16.5z"
      />
      <svg:path fill="none" d="M311 92.2c-10-.5-6.1-9.8-6.1-9.8" />
      <svg:path
        d="M328 93.5s-1.7-.8-3.2-2.8c-2-2.7-6.7-4-9.1-1.4 0 0-2.5 2.8-4.8 3 0 0 2.6.7 4.3 2.3 1.7 1.6 3.5 2.8 6.1 2.4 2.6-.3 3-1.7 4.2-2.5 1.3-.8 2.5-1 2.5-1z"
      />
    </svg:g>
    <svg:path
      fill="#369443"
      stroke="#010002"
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="M202.8 336.5s-.2-6.4 7.8-6.8l23.5 32.7s-.9 2.1-11.5 1.9c0 0-1.2 0-1.8 1.2-.9 2-18-29-18-29z"
    />
    <svg:g
      id="vi-a"
      fill="#f4c53d"
      stroke="#010002"
      stroke-width="10"
      transform="translate(3.6 26.2)scale(.15055)"
    >
      <svg:path
        d="M1495 1807.9s-49.9 85.6-110.2 87c0 0-103.7-12.6-133 14.5-20.5 18.9-41.4 34.5-50 82.8-8.4 48.3 16.5 58.7 22.4 60.8 0 0 4.6 34.5 38.7 25.5 0 0 2 36 62.2 18.7 60.3-17.3 85.3-11.8 97-71.8 11.9-60.1 22.8-59.1 33.5-66.3 14.4-9.7 41.5-18.8 61.6-30.4 18-10.4 87.2-45.6 110.8-48.3 23.6-2.8 18.4-82.2 18.4-82.2h-61l-29.5-43.5zm192-429.4s-61 49.7-112.2 0c0 0-20.6 24.8-62 17.6-41.2-7.3-48.1-29-52-41.4 0 0-35.8 20.8-66 4.3-30-16.4-30-41.3-30-41.3s-52.5 10.4-79.4-25.2c-26.9-35.5-10.5-70.7 4-74.9 0 0-56.7 14.9-72.2-33.8a56 56 0 0 1 16.4-62.8s-119.4-.6-168.4-38c0 0-40.7-25.6-16.4-52.5 0 0-107.5-17.2-134.4-60 0 0-11.8-11.8-7.9-32.5 0 0 .7-11.7 12.5-12.4 0 0-122.6-19-158-59.4 0 0-17-18.6-8.5-43.5 0 0 1.8-6.5 4.7-11 0 0-111.6-23.5-166.6-73.2 0 0-31.8-28.3-15.4-66.3 0 0-186.5-51-143.3-133.2 0 0-87.2-28.3-59.6-107 0 0-72.1-36.6-40.7-94.6 30.1-55.5 122.6 9.7 232 40 0 0 296.4 93.2 442.3 118l414.6 617.3 241.9 93.2z"
      />
      <svg:path
        d="M1689.9 923.9s-38.9-29.2-108.2 5.1c0 0-23.3 16.1-41.7-1.5a37.3 37.3 0 0 1 4.3-57.5c51.7-38.3 70.8-153.2-7.8-200.9 0 0-114-67.6-532.3-174 0 0-35-9.8-53.8-5.1a52 52 0 0 0-37.6 37.8S894 581.1 957 611.6c0 0 28.4 13 57.7 21.4 0 0-32.2-7-46 24.8-13 30.4 6 61.5 65 81.5 0 0 16 6.2 38.7 11.7 0 0-50.5 14.5-26.2 55.3 0 0 21.6 42.8 98 50.4 0 0-57 6.2-16.8 60.4 0 0 17.7 29.7 73.4 40.7 0 0-42.2 1.4-21 39.3 21.4 38 71.5 59.4 120.9 62.9 0 0 26.7 1.4 45.4-2.8 0 0-47 23.5-19.4 62.8 0 0 20.3 28 71.1 26.6 0 0-13.1 44 24.1 60.6 29 13 53.1-7.8 53.1-7.8s-9.8 47.1 32.5 63.7c0 0 21.1 10.9 52.6 0 0 0 24 53.9 109.6 16 85.6-37.7 20.2-355.1 20.2-355.1zm5 489.4s-12.5 67.4-112 152.2c0 0-76.8 67.7-74.9 145.7 2 79.5-13.7 88.4-43.9 115.3 0 0 62.3 4.9 92.4-36.6 0 0-1.3 69-10.5 75.3 0 0 19.6 1.2 47.9-29.7 0 0 17-18 32.8-24.9 0 0-18.4 47.7-4 91.9 0 0 4.6-17.3 28.9-24.9 0 0 44-9 61-72.5 0 0 11.1-42 80-79.4 0 0 78-29.4 76-67.8-2-38.5-173.6-244.6-173.6-244.6z"
      />
      <svg:path
        stroke-miterlimit="10"
        d="M2056.5 2282.2s-17.9 78.8-80 72.5c0 0-43.9-4.2-40.6-77.4 0 0-64.9 34.6-75.4-51 0 0-59 13.7-58.3-66.3 0 0-55 9.6-48.5-61.5 0 0-59.7 16-59.7-51 0 0-139.6-23.2 151.4-288.6l259.6 154.6z"
      />
      <svg:path
        d="M2085.4 1928.3s-43.3 38.4-74.1-19c0 0-42-2-48.5-33.8 0 0-34.1-3.4-40.7-35.9 0 0-46.5-4.8-45.2-44.1 0 0-84.6-6.6 0-102.4 84.6-95.8 228.1 159 228.1 159zm48.2-23.8c42 0 89.5 262 77.2 419.9-4.5 57.3-35.2 104.1-77.2 104.1s-72.6-46.8-77-104.1c-12.4-157.9 35.1-419.9 77-419.9"
      />
      <svg:ellipse cx="2133.6" cy="1902.5" rx="58" ry="86" />
      <svg:path
        fill="none"
        stroke-miterlimit="10"
        d="M1935.9 2277.3s6.6-138.7 126.8-337.6m-202.2 286.6s-18.7-80.1 150.8-317c0 0-19.7-56.5 40.6-92.8M1802.2 2160s-5.3-86.7 160.6-284.5c0 0-14.7-51 45.4-91.8m-254.5 314.8s6.2-87.6 168.4-258.9c0 0-8-52.4 50-84.9m-278 292.8s11.7-100.1 182.8-252c0 0-5.9-39.4 51.1-79.4"
      />
      <svg:path
        fill="none"
        d="M372.3 432s134.3 77.8 552.9 155.6M431.9 539S795.6 657.6 965 672.2m-389.9 0s213.4 67 463.3 109.3m-281.2 30.3s241 57.9 356.2 67.5M919 925.6s203.9 42.5 255.5 47.6m-125.7 57.3s148.8 22.6 208 21.4m-23.2 69s60.2-2.8 89.1-7.6m-33.4 104.3s51.2-13.8 81.3-33.1m-5.9 133.2s39.4-15.2 58.4-56.6m37.7 93.6s30.4-27.3 32.4-57.7m81.6 81.5s-11.4-9.9-3.6-52.7m-11.1-62.8s-6-12.2-4-31.6m-211-581.3s68.8 27.6 91.7 65.6c23 38 7.9 74.9 0 96-3.9 10.7-52.4 104.2 4.6 171.9M1346 1057s.4-.3 24.6-8m-169.8-91.4s41 8.2 81.3 8.6m-138-109.8s48.2 4.9 93.5 4.2m-165.2-109.8s69.5 13.8 106.8 14.5M1014.7 633s85.7 24.4 149.4 33.1m141.6 50.4s-61.6 57.3 12.5 110.5c0 0-30.8 48.3 30.8 98.7m-16.4 23.8s-9.2 92.2 103.6 92.2c0 0-21.7 82.1 87.2 79.4 0 0 12.4 65.6 91 52.4M1441.3 1895s-17.9 4-56.6 0m-108.8 48.3s-54.4-8.3-51.8 109.8m84.6-82.9s-49.2-6.2-46 108.4m520.7-384.5s-23.6 4.8-40 23.5c-16.3 18.6-47.8 15.1-47.8 15.1s17-13.8 23-48.3c5.8-34.5 24.9-44.9 24.9-44.9m-56.3-32.6s-23.6 4.8-40 23.4c-16.4 18.7-47.9 15.2-47.9 15.2s17-13.8 23-48.3c5.9-34.5 24.9-44.9 24.9-44.9m23.7 188.5s-20.6 4.3-34.9 20.5c-14.3 16.3-41.8 13.3-41.8 13.3s15-12 20-42.2c5.2-30.1 21.8-39.2 21.8-39.2"
      />
    </svg:g>
    <use
      xlink:href="#vi-a"
      width="100%"
      height="100%"
      stroke="#010002"
      stroke-width="10"
      transform="matrix(-1 0 0 1 647.2 0)"
    />
    <svg:path
      fill="#0081c6"
      stroke="#010002"
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="m466 256-14.3 61.7-5.9-4.2 14-59.2-9.8.2 23.1-42.3 1.5 48.7zm37 13-43 50.8-4.6-5.2 42.8-50.2-8.7-4.6 39.2-26-20.3 43.8z"
    />
    <svg:path
      fill="#0081c6"
      stroke="#010002"
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="m492.6 242-38.5 74-5.9-3.5 38.7-73.8-9.4-2.4 32.7-34.6-10.5 47.5zm-48 96.6-2.9 11.7 8 8-11.2 47-10-13.3-14.6 6.8 11.1-47 10.4-3 2.6-11.7s3.2-1.2 6.6 1.5z"
    />
    <svg:path
      fill="#0081c6"
      stroke="#010002"
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="m447.3 330.8-5.7 10.6 5.7 9.7-22.4 42.5-6.3-15.6-15.9 2.6 22.4-42.4h10.7l5.5-10.6s4 0 6 3.2z"
    />
    <svg:path
      fill="#0081c6"
      stroke="#010002"
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="m448.2 333.9-15 19.2 3.4 10.8-30.9 36-2.8-16.6-16-1.2 30.8-36 10.4 2.5 16-20.4s4.4 2.2 4.1 5.7zm-382.7-45c3.6-1.5 6.2-2.9 6.2-6.7 0-1-.5-3-1.5-6.1L46 202a59 59 0 0 0-3-7.9c-1.1-2-3.2-2.9-6.1-4h30.7c-3.3 1.5-6.4 2.7-6.3 6.3 0 1.3.4 3.2 1.1 5.7l18.6 58 18.5-58a20 20 0 0 0 1.1-5.7c0-3.7-3.2-5-6.3-6.4h29.8c-2.7 1.1-5 2-6 4.1a63 63 0 0 0-3.1 8L90.8 276a37.9 37.9 0 0 0-1.5 6.1s-1.1 4.7 6.2 6.7zm515.3-7.6v-83.7c0-1.4-.3-2.5-.8-3.3s-2.5-3-5.5-4.2h27.7a11.5 11.5 0 0 0-5.5 4.2c-.5.8-.7 1.9-.7 3.3v83.7c0 1.5.2 2.6.7 3.4.5.8 2.5 2.8 5.5 4.2h-27.7c3-1.4 5-3.4 5.5-4.2.5-.8.8-1.9.8-3.4z"
    />
    <svg:path
      fill="#fff"
      stroke="#010002"
      stroke-width="1.5"
      d="M324.8 309.8S399 276.9 399.1 201H250.5c.2 76 74.3 108.8 74.3 108.8z"
    />
    <svg:path
      fill="#a60032"
      stroke="#010002"
      stroke-width="1.5"
      d="M262 201v48.5s5.6 11.3 11.4 18.3V201zm22.8 0v80s7.2 7 11.4 10.4V201zm22.9 0v98.9s8.1 5.2 11.4 7v-106h-11.4zm80 0v48.5s-5.7 11.3-11.5 18.3V201zm-22.9 0v80s-7.1 7-11.4 10.4V201zm-22.8 0v98.9s-8.2 5.2-11.5 7v-106H342z"
    />
    <svg:path
      fill="#162667"
      stroke="#010002"
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="M399.1 145.8s-36.4 19-74.3-1.6c-37.9 20.6-74.3 1.6-74.3 1.6V201h148.6z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiViFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
