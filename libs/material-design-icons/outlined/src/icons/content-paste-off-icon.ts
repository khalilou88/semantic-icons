import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-content-paste-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.42zM5 19V7.83L16.17 19H5zM17 8V5h2v11.17l2 2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5H17zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
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
export class SiContentPasteOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
