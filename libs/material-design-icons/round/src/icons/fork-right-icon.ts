import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-fork-right-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9 20c0 .55.45 1 1 1s1-.45 1-1v-3c.73-2.58 3.07-3.47 5.17-3l-.88.88a.996.996 0 1 0 1.41 1.41l2.59-2.59a.996.996 0 0 0 0-1.41L16.7 9.7a.996.996 0 1 0-1.41 1.41l.88.89c-1.51-.33-3.73.08-5.17 1.36V6.83l.88.88a.996.996 0 1 0 1.41-1.41L10.7 3.71a.996.996 0 0 0-1.41 0L6.71 6.29A.996.996 0 1 0 8.12 7.7L9 6.83V20z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiForkRightIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
