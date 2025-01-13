import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-minor-crash-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.57 8H5.43L3 15v9h3v-2h12v2h3v-9l-2.43-7zM6.85 10h10.29l1.04 3H5.81l1.04-3zM6 17.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 19 7.5 19 6 18.33 6 17.5zm9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zM9.41 5 8 6.41l-3-3L6.41 2l3 3zM16 6.41 14.59 5l3-3L19 3.41l-3 3zM13 5h-2V0h2v5z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMinorCrashIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
