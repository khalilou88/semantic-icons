import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-curtains-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 13.14V19h3.94c-.3-2.93-1.89-5.27-3.94-5.86zM9.94 5H6v5.86C8.05 10.27 9.64 7.93 9.94 5zm4.12 14H18v-5.86c-2.05.59-3.64 2.93-3.94 5.86zM18 10.86V5h-3.94c.3 2.93 1.89 5.27 3.94 5.86z"
      opacity=".3"
    />
    <svg:path
      d="M20 19V3H4v16H2v2h20v-2h-2zM6 5h3.94c-.3 2.93-1.89 5.27-3.94 5.86V5zm0 14v-5.86c2.05.58 3.64 2.93 3.94 5.86H6zm5.95 0c-.26-3.06-1.72-5.65-3.76-7 2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7-2.04 1.35-3.5 3.94-3.76 7h-.09zM18 19h-3.94c.3-2.93 1.89-5.27 3.94-5.86V19zm0-8.14c-2.05-.58-3.64-2.93-3.94-5.86H18v5.86z"
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
export class SiCurtainsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
