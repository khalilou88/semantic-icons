import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-flag-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M80 464V68.14a8 8 0 014-6.9C91.81 56.66 112.92 48 160 48c64 0 145 48 192 48a199.53 199.53 0 0077.23-15.77 2 2 0 012.77 1.85v219.36a4 4 0 01-2.39 3.65C421.37 308.7 392.33 320 352 320c-48 0-128-32-192-32s-80 16-80 16"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="32"
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
export class SiFlagOutlineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
