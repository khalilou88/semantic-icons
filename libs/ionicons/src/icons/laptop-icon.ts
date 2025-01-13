import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-laptop-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M496 400h-28.34A47.92 47.92 0 00480 367.86V128.14A48.2 48.2 0 00431.86 80H80.14A48.2 48.2 0 0032 128.14v239.72A47.92 47.92 0 0044.34 400H16a16 16 0 000 32h480a16 16 0 000-32z"
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
export class SiLaptopIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
