import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-prism-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M229.73 45.88L37.53 327.79a31.79 31.79 0 0011.31 46L241 476.26a31.77 31.77 0 0029.92 0l192.2-102.51a31.79 31.79 0 0011.31-46L282.27 45.88a31.8 31.8 0 00-52.54 0zM256 32v448"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
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
export class SiPrismOutlineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
