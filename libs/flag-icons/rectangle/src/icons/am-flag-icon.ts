import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-am-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#d90012" d="M0 0h640v160H0z" />
    <svg:path fill="#0033a0" d="M0 160h640v160H0z" />
    <svg:path fill="#f2a800" d="M0 320h640v160H0z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAmFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
