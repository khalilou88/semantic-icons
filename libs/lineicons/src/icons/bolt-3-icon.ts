import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bolt-3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.2436 2.5855C15.5276 2.73412 15.6858 3.04681 15.6372 3.36366L14.3518 11.7486L18.8037 11.7486C19.1107 11.7486 19.3867 11.9357 19.5004 12.2209C19.6141 12.506 19.5425 12.8317 19.3197 13.0429L9.56063 22.2943C9.328 22.5148 8.98093 22.5632 8.69691 22.4145C8.4129 22.2659 8.25474 21.9532 8.30331 21.6364L9.58866 13.2514H5.13675C4.82975 13.2514 4.55375 13.0643 4.44007 12.7792C4.32638 12.494 4.39797 12.1683 4.62076 11.9571L14.3799 2.70572C14.6125 2.48519 14.9596 2.43688 15.2436 2.5855ZM7.01806 11.7514H10.4624C10.6811 11.7514 10.889 11.8469 11.0315 12.0129C11.174 12.1789 11.2369 12.3988 11.2037 12.6151L10.1178 19.6993L16.9224 13.2486L13.4781 13.2486C13.2593 13.2486 13.0515 13.1531 12.909 12.9871C12.7665 12.8211 12.7036 12.6012 12.7368 12.385L13.8227 5.30075L7.01806 11.7514Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBolt3Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 24 25');

  readonly fill = input<string>('none');
}
