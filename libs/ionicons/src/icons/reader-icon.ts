import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-reader-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M368 32H144a64.07 64.07 0 00-64 64v320a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V96a64.07 64.07 0 00-64-64zM256 304h-80a16 16 0 010-32h80a16 16 0 010 32zm80-80H176a16 16 0 010-32h160a16 16 0 010 32zm0-80H176a16 16 0 010-32h160a16 16 0 010 32z"
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
export class SiReaderIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
