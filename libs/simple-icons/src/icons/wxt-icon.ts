import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wxt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>WXT</svg:title>
    <svg:path
      d="M10.18 0c-2.081 0-3.807 1.608-4 3.64H4.019A4.033 4.033 0 0 0 0 7.66v4.017h1.498a2.13 2.13 0 0 1 2.143 2.144 2.13 2.13 0 0 1-2.143 2.143H0V24h8.036v-1.498a2.13 2.13 0 0 1 2.144-2.143 2.13 2.13 0 0 1 2.143 2.143V24h4.018a4.03 4.03 0 0 0 4.018-4.018v-2.163C22.392 17.627 24 15.901 24 13.821s-1.608-3.807-3.64-4V7.66a4.03 4.03 0 0 0-4.019-4.018h-2.162C13.986 1.608 12.26 0 10.179 0m0 1.875a2.13 2.13 0 0 1 2.143 2.143v1.498h4.018a2.13 2.13 0 0 1 2.143 2.143v4.018h1.498a2.13 2.13 0 0 1 2.143 2.144 2.13 2.13 0 0 1-2.143 2.143h-1.498v4.018a2.13 2.13 0 0 1-2.143 2.143h-2.162c-.193-2.033-1.919-3.64-4-3.64s-3.806 1.607-3.998 3.64H1.875V17.82c2.033-.192 3.64-1.918 3.64-3.998s-1.607-3.807-3.64-4V7.66a2.13 2.13 0 0 1 2.143-2.143h4.018V4.018a2.13 2.13 0 0 1 2.144-2.143"
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
export class SiWxtIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#67D55E');
}
