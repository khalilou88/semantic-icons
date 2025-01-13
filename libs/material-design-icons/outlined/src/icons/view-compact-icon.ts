import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-view-compact-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2 4v16h20V4H2zm4.5 14H4v-2.5h2.5V18zm0-4.75H4v-2.5h2.5v2.5zm0-4.75H4V6h2.5v2.5zM11 18H8.5v-2.5H11V18zm0-4.75H8.5v-2.5H11v2.5zm0-4.75H8.5V6H11v2.5zm4.5 9.5H13v-2.5h2.5V18zm0-4.75H13v-2.5h2.5v2.5zm0-4.75H13V6h2.5v2.5zM20 18h-2.5v-2.5H20V18zm0-4.75h-2.5v-2.5H20v2.5zm0-4.75h-2.5V6H20v2.5z"
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
export class SiViewCompactIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
