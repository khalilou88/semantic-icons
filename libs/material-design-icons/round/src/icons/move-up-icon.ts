import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-move-up-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.01 13.28A4.985 4.985 0 0 1 7.08 8.1l-.79.78a.996.996 0 1 0 1.41 1.41l2.59-2.59a.996.996 0 0 0 0-1.41L7.71 3.7A.996.996 0 1 0 6.3 5.11l.88.88v.06a6.995 6.995 0 0 0-6.15 7.47C1.29 17.22 4.55 20 8.26 20H10c.55 0 1-.45 1-1s-.45-1-1-1H8.22c-2.7 0-5.07-2.04-5.21-4.72zM13 15v3c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2zm7 3h-5v-3h5v3zm0-14h-5c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"
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
export class SiMoveUpIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
