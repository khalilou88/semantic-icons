import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-codesignal-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>CodeSignal</svg:title>
    <svg:path
      d="M24 1.212 13.012 2.787 12 5.62l-1.01-2.833L0 1.212 3.672 11.45l4.512.646 3.815 10.691 3.816-10.691 4.512-.646zm-3.625 4.406-4.52.648-.73 2.044 4.517-.647-.734 2.047-4.514.647L12 17.064l-2.393-6.707-4.514-.647-.735-2.047 4.518.647-.73-2.044-4.52-.648-.735-2.047 6.676.956L12 11.345l2.434-6.818 6.676-.956Z"
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
export class SiCodesignalIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#1062FB');
}
