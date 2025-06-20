import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-freetube-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>FreeTube</svg:title>
    <svg:path
      d="M4.7066 0c.9 0 1.6294.7295 1.6294 1.6294V24H4.0993a4.0988 4.0988 0 0 1-2.8986-1.2007A4.0988 4.0988 0 0 1 0 19.9007V1.6294C0 .7294.7295 0 1.6294 0ZM24 0v1.9409a4.3951 4.3951 0 0 1-4.3951 4.3951H9.0053c-.891 0-1.6133-.7223-1.6133-1.6133V1.6133C7.392.7223 8.1143 0 9.0053 0Zm-6.7817 11.734a.618.618 0 0 1 0 1.108l-8.9022 4.412a.64.64 0 0 1-.9241-.5734V7.8954a.64.64 0 0 1 .9241-.5734Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFreetubeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#F04242');
}
