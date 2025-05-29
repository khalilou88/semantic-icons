import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-ma-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#c1272d" d="M512 0H0v512h512z" />
    <svg:path
      fill="none"
      stroke="#006233"
      stroke-width="12.5"
      d="m256 191.4-38 116.8 99.4-72.2H194.6l99.3 72.2z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMaFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
