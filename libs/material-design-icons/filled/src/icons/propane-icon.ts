import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-propane-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 6h-1V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1H7c-3.31 0-6 2.69-6 6s2.69 6 6 6v3h2v-3h6v3h2v-3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm-7-1h4v1h-4V5z"
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
export class SiPropaneIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
