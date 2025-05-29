import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-developer-board-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 19h14V5H4v14zm8-12h4v3h-4V7zm0 4h4v6h-4v-6zM6 7h5v5H6V7zm0 6h5v4H6v-4z"
      opacity=".3"
    />
    <svg:path
      d="M6 13h5v4H6zm0-6h5v5H6zm6 0h4v3h-4zm0 4h4v6h-4zm10-2V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14z"
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
export class SiDeveloperBoardIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
