import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-no-crash-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.57 8H5.43L3 15v9h3v-2h12v2h3v-9l-2.43-7zM6.85 10h10.29l1.04 3H5.81l1.04-3zM6 17.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 19 7.5 19 6 18.33 6 17.5zm9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zM12 6.36 9.17 3.54l1.41-1.41L12 3.54 15.54 0l1.41 1.41L12 6.36z"
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
export class SiNoCrashIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
