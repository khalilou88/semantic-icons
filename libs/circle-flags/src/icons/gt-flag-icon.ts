import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-gt-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#338af3"
        d="M0 0h144.7l108.4 41.2L367.3 0H512v512H367.3l-110.2-41.4L144.7 512H0z"
      />
      <svg:path fill="#eee" d="M144.7 0h222.6v512H144.7z" />
      <svg:path
        fill="#acabb1"
        d="M322.9 299.3 279.6 256l41.2-41.2L319 193l-11.7-11.8-51.2 51.2-51.2-51.2-11.7 11.8-2 21.8 41.3 41.2-43.3 43.3 23.6 23.6 43.3-43.3 43.3 43.3z"
      />
      <svg:path
        fill="#6da544"
        d="m319 193-23.6 23.6a55.5 55.5 0 0 1-39.4 95 55.7 55.7 0 0 1-39.4-95L193 193a89 89 0 1 0 126 0z"
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
export class SiGtFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
