import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-vertical-shades-closed-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.5 5H11v14H9.5zM6 5h1.5v14H6zm7 0h1.5v14H13zm3.5 0H18v14h-1.5z"
      opacity=".2"
    />
    <svg:path
      d="M20 19V3H4v16H2v2h20v-2h-2zM7.5 19H6V5h1.5v14zm3.5 0H9.5V5H11v14zm3.5 0H13V5h1.5v14zm3.5 0h-1.5V5H18v14z"
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
export class SiVerticalShadesClosedIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
