import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-toggle-header-row-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 15v3c0 .5523.44772 1 1 1h16c.5523 0 1-.4477 1-1v-3M3 15V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v9M3 15h18M8 15v4m4-4v4m4-4v4m-7-9h1.9909M15 10c0 1.1046-.8954 2-2 2s-2-.8954-2-2c0-1.10457.8954-2 2-2s2 .89543 2 2Z"
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
export class SiToggleHeaderRowIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
