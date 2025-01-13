import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-by-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#eee" d="M0 0h155.8l35 254.6-35 257.4H0z" />
      <svg:path fill="#a2001d" d="M155.8 0H512v345.1l-183 37.4-173.2-37.4z" />
      <svg:path fill="#6da544" d="M155.8 345.1H512V512H155.8z" />
      <svg:path
        fill="#a2001d"
        d="M50 .2 22.3 50l27.8 50.4L77.9 50zm55.8 0L78 50l27.7 50.4 28-50.4zM50 137.5l-27.7 49.6 27.8 50.5 27.7-50.5zm55.8 0L78 187.1l27.7 50.5 28-50.5zM50 274.7l-27.7 49.7 27.8 50.4 27.8-50.4zm55.8 0L78 324.4l27.7 50.4 28-50.4zM50 412l-27.7 49.6 27.8 50.5 27.7-50.5zm55.8 0L78 461.6l27.7 50.5 28-50.5z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiByFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
