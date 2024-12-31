import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-device-vision-pro-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-device-vision-pro"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 6q 1.74 0 3.342 .106q 1.619 .107 2.973 .448q 1.388 .345 2.436 1.05a4.9 4.9 0 0 1 1.665 1.916c.397 .801 .584 1.769 .584 2.91c0 1.156 -.222 2.208 -.673 3.14c-.45 .934 -1.073 1.685 -1.868 2.236a4.7 4.7 0 0 1 -2.73 .839q -.932 .001 -1.703 -.263a7 7 0 0 1 -1.374 -.644a20 20 0 0 1 -1.107 -.736a8 8 0 0 0 -.901 -.567a1.4 1.4 0 0 0 -.643 -.174c-.209 0 -.426 .057 -.658 .18q -.42 .226 -.893 .564a20 20 0 0 1 -1.105 .733a6.8 6.8 0 0 1 -1.366 .642a5.2 5.2 0 0 1 -1.688 .264a4.7 4.7 0 0 1 -2.75 -.838c-.794 -.55 -1.418 -1.302 -1.868 -2.234q -.675 -1.407 -.673 -3.14c-.005 -1.135 .182 -2.105 .577 -2.9a4.9 4.9 0 0 1 1.673 -1.926c.699 -.47 1.511 -.816 2.442 -1.049a17 17 0 0 1 2.968 -.447q 1.599 -.11 3.34 -.11"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDeviceVisionProIcon {
  readonly class = input<string>('');
}
