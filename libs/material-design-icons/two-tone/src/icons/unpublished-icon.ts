import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-unpublished-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m13.59 10.76 2.65-2.65 1.41 1.41L15 12.17l3.88 3.88A7.869 7.869 0 0 0 20 12c0-4.41-3.59-8-8-8-1.48 0-2.86.41-4.06 1.12l5.65 5.64zm4.07-1.23-1.41-1.41-2.65 2.65 1.41 1.41 2.65-2.65zm-1.6 9.35L12.18 15l-1.59 1.59-4.24-4.24 1.41-1.41 2.83 2.83.18-.18-5.65-5.65A7.932 7.932 0 0 0 4 12c0 4.41 3.59 8 8 8 1.48 0 2.86-.41 4.06-1.12z"
      opacity=".3"
    />
    <svg:path
      d="M7.94 5.12 6.49 3.66A9.91 9.91 0 0 1 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46A7.869 7.869 0 0 0 20 12c0-4.41-3.59-8-8-8-1.48 0-2.86.41-4.06 1.12zm9.72 4.41-1.41-1.41-2.65 2.65 1.41 1.41 2.65-2.65zm2.12 13.08-2.27-2.27A9.91 9.91 0 0 1 12 22C6.48 22 2 17.52 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zm-3.72-3.73L12.18 15l-1.59 1.59-4.24-4.24 1.41-1.41 2.83 2.83.18-.18-5.65-5.65A7.932 7.932 0 0 0 4 12c0 4.41 3.59 8 8 8 1.48 0 2.86-.41 4.06-1.12z"
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
export class SiUnpublishedIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
