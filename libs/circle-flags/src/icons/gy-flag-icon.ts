import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-gy-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#6da544" d="M77.7 0H512v512H77.8z" />
      <svg:path
        fill="#eee"
        d="M425.4 254.7 31.4 512h46.4L512 256 77.7 0H31.4z"
      />
      <svg:path fill="#ffda44" d="M256 256 31.4 512l436.8-256L31.4 0z" />
      <svg:path
        fill="#333"
        d="M0 0v1.8l219.6 253.8L0 510v2h31.4l256-256L31.4 0z"
      />
      <svg:path fill="#d80027" d="M0 0v512l256-256L0 0z" />
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
export class SiGyFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
