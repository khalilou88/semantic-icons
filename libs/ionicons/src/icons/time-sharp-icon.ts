import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-time-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M256 48C141.13 48 48 141.13 48 256c0 114.69 93.32 208 208 208 114.86 0 208-93.14 208-208 0-114.69-93.31-208-208-208zm108 240H244a4 4 0 01-4-4V116a4 4 0 014-4h24a4 4 0 014 4v140h92a4 4 0 014 4v24a4 4 0 01-4 4z"
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
export class SiTimeSharpIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
