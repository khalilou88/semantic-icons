import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-php-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13 9h1.5v6H13v-2.5h-2V15H9.5V9H11v2h2V9zM8 9v4H4.5v2H3V9h5zm-1.5 1.5h-2v1h2v-1zm15-1.5v4H18v2h-1.5V9h5zM20 10.5h-2v1h2v-1z"
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
export class SiPhpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
