import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-fm-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#338af3" d="M0 0h512v512H0z" />
      <svg:path
        fill="#eee"
        d="m256 111.3 11 34h35.8l-29 21 11.1 34-28.9-21-29 21 11.1-34-29-21H245zM111.3 256l34-11v-35.8l21 29 34-11.1-21 28.9 21 29-34-11.1-21 29V267zM256 400.7l-11-34h-35.8l29-21-11.1-34 28.9 21 29-21-11.1 34 29 21H267zM400.7 256l-34 11v35.8l-21-29-34 11.1 21-28.9-21-29 34 11.1 21-29V245z"
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
export class SiFmFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
