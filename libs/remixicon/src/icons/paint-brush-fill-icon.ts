import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-paint-brush-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 2.9967H20C20.5523 2.9967 21 3.44442 21 3.9967V8.9967C21 9.54899 20.5523 9.9967 20 9.9967H4C3.44772 9.9967 3 9.54899 3 8.9967V3.9967C3 3.44442 3.44772 2.9967 4 2.9967ZM6 11.9967H12C12.5523 11.9967 13 12.4444 13 12.9967V15.9967H14V21.9967H10V15.9967H11V13.9967H5C4.44772 13.9967 4 13.549 4 12.9967V10.9967H6V11.9967ZM17.7322 13.7289L19.5 11.9612L21.2678 13.7289C22.2441 14.7052 22.2441 16.2882 21.2678 17.2645C20.2915 18.2408 18.7085 18.2408 17.7322 17.2645C16.7559 16.2882 16.7559 14.7052 17.7322 13.7289Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPaintBrushFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
