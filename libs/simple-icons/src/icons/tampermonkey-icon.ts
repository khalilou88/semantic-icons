import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tampermonkey-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Tampermonkey</svg:title>
    <svg:path
      d="M5.955.002C3-.071.275 2.386.043 5.335c-.069 3.32-.011 6.646-.03 9.969.06 1.87-.276 3.873.715 5.573 1.083 2.076 3.456 3.288 5.77 3.105 4.003-.011 8.008.022 12.011-.017 2.953-.156 5.478-2.815 5.482-5.772-.007-4.235.023-8.473-.015-12.708C23.82 2.533 21.16.007 18.205.003c-4.083-.005-8.167 0-12.25-.002zm.447 12.683c2.333-.046 4.506 1.805 4.83 4.116.412 2.287-1.056 4.716-3.274 5.411-2.187.783-4.825-.268-5.874-2.341-1.137-2.039-.52-4.827 1.37-6.197a4.896 4.896 0 012.948-.99zm11.245 0c2.333-.046 4.505 1.805 4.829 4.116.413 2.287-1.056 4.716-3.273 5.411-2.188.783-4.825-.268-5.875-2.341-1.136-2.039-.52-4.827 1.37-6.197a4.896 4.896 0 012.949-.99z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTampermonkeyIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#00485B');
}
