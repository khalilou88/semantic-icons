import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-image-not-supported-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m21.19 21.19-.78-.78L18 18l-4.59-4.59-9.82-9.82-.78-.78a.996.996 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22L3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61c.39.39 1.02.39 1.41 0 .39-.39.39-1.03 0-1.42zM6.02 18c-.42 0-.65-.48-.39-.81l2.49-3.2a.5.5 0 0 1 .78-.01l2.1 2.53L12.17 15l3 3H6.02zm14.98.17L5.83 3H19c1.1 0 2 .9 2 2v13.17z"
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
export class SiImageNotSupportedIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
