import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tty-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 15v6c-3.28 0-6.35-.89-9-2.43A17.999 17.999 0 0 1 4.43 12 17.851 17.851 0 0 1 2 3h6l1 5-2.9 2.9c1.43 2.5 3.5 4.57 6 6L15 14l5 1zm-6-9h2V4h-2v2zm-1 3h2V7h-2v2zm-2-3h2V4h-2v2zm7 1h-2v2h2V7zm1-3h-2v2h2V4zm2 3h-2v2h2V7zm1-3h-2v2h2V4zm-8 8h2v-2h-2v2zm-3 0h2v-2h-2v2zm8-2h-2v2h2v-2zm3 0h-2v2h2v-2z"
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
export class SiTtyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
