import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-stroller-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10 5c.29 0 .58.02.86.05L9.49 6.66l-1.4-1.4C8.71 5.09 9.35 5 10 5m5 3.66V15H9.6L15 8.66"
      opacity=".3"
    />
    <svg:path
      d="M10 5c.29 0 .58.02.86.05L9.49 6.66l-1.4-1.4C8.71 5.09 9.35 5 10 5m5 3.66V15H9.6L15 8.66M18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-8.8 10.32C6.12 16 6.58 17 7.43 17H15c1.1 0 2-.9 2-2V6.27c.58-.68.97-1.27 1.65-1.27.77 0 1.35.66 1.35 1.48V7h2v-.52C22 4.56 20.52 3 18.65 3zM10 3c-1.97 0-3.79.64-5.28 1.72l4.89 4.89 4.7-5.51C13.03 3.4 11.56 3 10 3zm6 15c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
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
export class SiStrollerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
