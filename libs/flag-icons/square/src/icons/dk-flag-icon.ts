import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-dk-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#c8102e" d="M0 0h512.1v512H0z" />
    <svg:path fill="#fff" d="M144 0h73.1v512H144z" />
    <svg:path fill="#fff" d="M0 219.4h512.1v73.2H0z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDkFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
