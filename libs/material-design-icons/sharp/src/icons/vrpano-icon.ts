import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-vrpano-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 5.5c-5.25 0-9.01-1.54-10-1.92V20.4c2.16-.76 5.21-1.9 10-1.9 4.78 0 7.91 1.17 10 1.9V3.6c-2.09.73-5.23 1.9-10 1.9zm0 9.5c-2.34 0-4.52.15-6.52.41l3.69-4.42 2 2.4L14 10l4.51 5.4c-1.99-.25-4.21-.4-6.51-.4z"
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
export class SiVrpanoIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
