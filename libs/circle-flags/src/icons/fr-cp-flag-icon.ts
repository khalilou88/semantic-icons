import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-fr-cp-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="M0 0h512v512H0Z" />
      <svg:path fill="#fff" d="m256 52 204 204-204 204L52 256Z" />
      <svg:path fill="#ff9811" d="m232 463 12-299h24l12 299z" />
      <svg:path
        fill="#6da544"
        d="M293 172c31-14 42-23 90-22-40-18-77-23-108 0 9-23 27-54 59-77-55 9-82 36-86 68-14-32-55-45-100-45 50 27 36 27 73 63-32-5-68 9-104 50 49-27 72-18 104-14a90 90 0 0 0-41 86c36-45 31-32 77-72 18 40 40 49 49 86 9-37 0-77-18-91 36 14 68 23 86 50-9-63-50-72-81-82z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFrCpFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
