import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sy-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M0 0h640v480H0Z" />
    <svg:path fill="#fff" d="M0 0h640v320H0Z" />
    <svg:path fill="#007a3d" d="M0 0h640v160H0Z" />
    <svg:path
      fill="#ce1126"
      d="m101 300 39-120 39 120-102-74.2h126M461 300l39-120 39 120-102-74.2h126M281 300l39-120 39 120-102.1-74.2h126.2"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSyFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
