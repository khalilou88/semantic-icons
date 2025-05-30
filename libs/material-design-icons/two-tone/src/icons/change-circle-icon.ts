import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-change-circle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m.06 9.34v2.14a3.46 3.46 0 0 1-2.54-1.01c-1.12-1.12-1.3-2.8-.59-4.13l-1.1-1.1c-1.28 1.94-1.07 4.59.64 6.29A4.95 4.95 0 0 0 12 17h.06v2l2.83-2.83-2.83-2.83zm3.48-4.88c-.99-.99-2.3-1.46-3.6-1.45V5L9.11 7.83l2.83 2.83V8.51H12c.9 0 1.79.34 2.48 1.02 1.12 1.12 1.3 2.8.59 4.13l1.1 1.1a5.032 5.032 0 0 0-.63-6.3z"
      opacity=".3"
    />
    <svg:path
      d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.06 11.34v2.14a3.46 3.46 0 0 1-2.54-1.01c-1.12-1.12-1.3-2.8-.59-4.13l-1.1-1.1c-1.28 1.94-1.07 4.59.64 6.29A4.95 4.95 0 0 0 12 17h.06v2l2.83-2.83-2.83-2.83zm3.48-4.88c-.99-.99-2.3-1.46-3.6-1.45V5L9.11 7.83l2.83 2.83V8.51H12c.9 0 1.79.34 2.48 1.02 1.12 1.12 1.3 2.8.59 4.13l1.1 1.1a5.032 5.032 0 0 0-.63-6.3z"
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
export class SiChangeCircleIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
