import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-celebration-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m2 22 14-5-9-9zm12.53-9.47L21 6.05l1.48 1.48 1.06-1.06L21 3.93l-7.53 7.53 1.06 1.07zM10.94 6 9.47 7.47l1.06 1.06 2.54-2.54-2.54-2.53-1.06 1.07L10.94 6zm8.03 3.97-3.5 3.5 1.06 1.06L19 12.06l2.5 2.49 1.06-1.06-3.59-3.52z"
    />
    <svg:path
      d="m15.97 4.97-4.5 4.5 1.06 1.06L18.07 5l-3.53-3.53-1.06 1.06 2.49 2.44z"
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
export class SiCelebrationIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
