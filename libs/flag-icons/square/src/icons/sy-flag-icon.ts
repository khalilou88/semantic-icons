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
    <svg:path fill="#000001" d="M0 0h512v512H0Z" />
    <svg:path fill="#fff" d="M0 0h512v341.3H0Z" />
    <svg:path fill="#ce1126" d="M0 0h512v170.7H0Z" />
    <svg:path
      fill="#007a3d"
      d="M86.4 320 128 192l41.6 128-108.9-79.1h134.6M342.4 320 384 192l41.6 128-108.9-79.1h134.6"
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

  readonly viewBox = input<string>('0 0 512 512');
}
