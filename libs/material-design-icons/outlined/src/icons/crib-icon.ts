import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-crib-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18 9h-6V4H8C5.79 4 4 5.79 4 8v6c0 1.1.9 2 2 2h2v2.93c-.61-.35-1.16-.78-1.65-1.27l-1.42 1.42C6.74 20.88 9.24 22 12 22c2.76 0 5.26-1.12 7.07-2.93l-1.42-1.42c-.49.49-1.05.92-1.65 1.27V16h2c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm-4 10.75c-.64.16-1.31.25-2 .25s-1.36-.09-2-.25V16h4v3.75zM18 14H6V8c0-1.1.9-2 2-2h2v5h8v3z"
    />
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
export class SiCribIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
