import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-biotech-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3 0-1.09.59-2.04 1.46-2.56C8.17 9.03 8 8.54 8 8c0-.21.04-.42.09-.62A5.01 5.01 0 0 0 5 12c0 2.76 2.24 5 5 5v2H7z"
    />
    <svg:path
      d="M10.56 5.51C11.91 5.54 13 6.64 13 8c0 .75-.33 1.41-.85 1.87l.59 1.62.94-.34.34.94 1.88-.68-.34-.94.94-.34-2.74-7.53-.94.34-.34-.94-1.88.68.34.94-.94.35.56 1.54z"
    />
    <svg:circle cx="10.5" cy="8" r="1.5" />
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
export class SiBiotechIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
