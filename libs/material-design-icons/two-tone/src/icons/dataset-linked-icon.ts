import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-dataset-linked-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5 5v14h3.09c-.05-.33-.09-.66-.09-1s.04-.67.09-1H7v-4h3.69c.95-.63 2.09-1 3.31-1h5V5H5zm6 6H7V7h4v4zm2 0V7h4v4h-4z"
      opacity=".3"
    />
    <svg:path d="M7 17h1.09c.28-1.67 1.24-3.1 2.6-4H7v4z" />
    <svg:path
      d="M5 19V5h14v7h1c.34 0 .67.04 1 .09V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h3.81c-.35-.61-.6-1.28-.72-2H5z"
    />
    <svg:path
      d="M7 7h4v4H7zm6 0h4v4h-4zm3 13h-2c-1.1 0-2-.9-2-2s.9-2 2-2h2v-2h-2c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2zm4-6h-2v2h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2v2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
    />
    <svg:path d="M20 19v-2h-6v2h5z" />
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
export class SiDatasetLinkedIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
